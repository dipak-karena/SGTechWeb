import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, throwError, Subject } from "rxjs";
import { tap, switchMap, mergeMap, catchError, retry, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { StorageKey, StorageService } from './storage.service';


@Injectable()
export class EndpointFactory {
    constructor(protected http: HttpClient, protected storageService: StorageService,
        private injector: Injector) {
    }
    private taskPauser: Subject<any>;

    private isRefreshingLogin: boolean;
    handleError(error, continuation: () => Observable<any>) {
        if (error.status == 404) {
            error.error = "Not Authorize User";
            console.log(error)
            // this.showErrorMessage(error, "Unauthorize Error");
            return throwError(error);
        }
        if (error.status == 401 || error.status == 0) {
            if (this.isRefreshingLogin) {
                return this.pauseTask(continuation);
            }

            this.isRefreshingLogin = true;

            return this.refreshToken()
                .pipe(
                    catchError(err => {
                        this.isRefreshingLogin = false;
                        this.resumeTasks(false);
                        if (err.status == 401 || (err.url && err.url.toLowerCase().includes("login".toLowerCase()))) {

                            return throwError('session expired');
                        }
                        else {
                            return throwError(err || 'server error');
                        }
                    })
                ).
                pipe(mergeMap(data => {
                    this.isRefreshingLogin = false;
                    this.resumeTasks(true);

                    return continuation();
                }))
        }
        if (error.url && error.url.toLowerCase().includes("login".toLowerCase())) {


            return throwError((error.error && error.error.error_description) ? `session expired (${error.error.error_description})` : 'session expired');
        }
        else {
            return throwError(error);
        }


    }
    private pauseTask(continuation: () => Observable<any>) {
        if (!this.taskPauser) {
            this.taskPauser = new Subject();
        }

        return this.taskPauser.pipe(
            switchMap(continueOp => {
                console.log(continueOp);
                return continueOp ? continuation() : throwError('session expired');
            }
            ));

    }

    private resumeTasks(continueOp: boolean) {
        setTimeout(() => {
            if (this.taskPauser) {
                this.taskPauser.next(continueOp);
                this.taskPauser.complete();
                this.taskPauser = null;
            }
        });
    }
    refreshToken() {
        return this.http.post(`${environment.apiUrl}api/auth/refresh-token`, {}, { withCredentials: true }).
            pipe(map(user => {

                this.storageService.setValue(StorageKey.authToken, user["data"].token.value);
                // this.startRefreshTokenTimer();
                return user;
            })
            );

    }
    
}