import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../models/auth.models';
import { UserTypeEnum } from '../../enums/user-type.enum';
import { StorageService, StorageKey } from './storage.service';
import { environment } from 'src/environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
import { EndpointFactory } from './endpoint-factory.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends EndpointFactory {
    user: User;
    userType = UserTypeEnum;
    _userActionOccured: Subject<void> = new Subject();
    get userActionOccured(): Observable<void> { return this._userActionOccured.asObservable() };
 
    notifyUserAction() {
        this._userActionOccured.next();
    }

    constructor(private httpClient: HttpClient, injector: Injector,
        protected storageService: StorageService,        
        private router: Router) {
            super(httpClient, storageService,injector);
    }

    getsessionID(): any {
        var sessionID = this.storageService.getValue(StorageKey.sessionID);
        return sessionID ? sessionID : null;
    }

    get currentUser(): string {
        let user = this.storageService.getValue(StorageKey.currentUser);
        return user;
    }
    getAllCompanyList(data) {
        return this.httpClient.post(environment.apiUrl + "api/company/companylist", JSON.stringify(data)) 
        .pipe(catchError(error => {
            return this.handleError(error,() => this.getAllCompanyList(data))
        }));
             
            //return this.authService.handleError(error, () => this.getAllConditionEndpoint());
          
    }
    
    login(data: any): any {
        debugger
        return this.httpClient.post(`${environment.apiUrl}api/auth/login`, data, { withCredentials: true }).pipe(map(user => {

            this.storageService.setValue(StorageKey.currentUser, JSON.stringify(user["data"].user));
            this.storageService.setValue(StorageKey.sessionID, user["data"].uid);
            this.storageService.setValue(StorageKey.dateformat, JSON.stringify('dd/MM/yyyy'));
            this.storageService.setValue(StorageKey.datetimeformat, JSON.stringify('dd/MM/yyyy hh:mm:ss'));
            this.storageService.setValue(StorageKey.authToken, user["data"].token.value);

            //this.startRefreshTokenTimer();

            return user;
        }));;
    }

    logout() {
        this.storageService.removeValue(StorageKey.authToken);
        this.storageService.removeValue(StorageKey.currentUser);
        this.storageService.removeValue(StorageKey.companyData);
        this.storageService.removeValue(StorageKey.dateformat);
        this.storageService.removeValue(StorageKey.datetimeformat);
        this.storageService.removeValue(StorageKey.sessionID);
        this.storageService.removeValue(StorageKey.profileFullName);
        this.storageService.removeValue(StorageKey.profilePicPath);
        this.storageService.removeValue(StorageKey.userMenu);
        this.stopRefreshTokenTimer();
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        var token = this.storageService.getValue(StorageKey.authToken);
        var currentUser = this.storageService.getValue(StorageKey.currentUser);

        if (token && currentUser) {
            var superuser = JSON.parse(this.storageService.getValue(StorageKey.currentUser)).userType
            if (superuser != this.userType.SuperAdmin) {
                if (token && currentUser)
                    return true;
                else
                    return false;
            }
            else
                return true;
        }
        else
            return false;
    }

    getAccessToken(): any {
        var token = this.storageService.getValue(StorageKey.authToken);
        return token ? token : null;
    }
    refreshToken() {
        return this.httpClient.post(`${environment.apiUrl}api/auth/refresh-token`, {}, { withCredentials: true }).
            pipe(map(user => {

                this.storageService.setValue(StorageKey.authToken, user["data"].token.value);
               // this.startRefreshTokenTimer();
                return user;
            })
            );

    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        debugger;

        // parse json object from base64 encoded jwt token
        let token = this.getAccessToken();
        const jwtToken = JSON.parse(atob(token.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe((r) => { }, error => {
            // this.error = error ? error : '';
            if (error.status == 401) {
                alert('hi');
                this.logout();
            }
        }), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}