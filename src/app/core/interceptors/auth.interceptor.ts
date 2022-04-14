import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { tap, switchMap, mergeMap, catchError, retry } from "rxjs/operators";

import { AuthenticationService } from '../services/common/auth.service';
import { StorageService, StorageKey } from '../services/common/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService,
        private storageService: StorageService
    ) { }
    private taskPauser: Subject<any>;

    private isRefreshingLogin: boolean;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var authToken = this.authService.getAccessToken();
        if (authToken) {
            
            req = req.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + authToken,
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*'
                },
              });
          
             
            return next.handle(req);
        }
        else {
            return next.handle(req.clone()).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status == 401) {
                             this.backToLogin();
                            //  return this.handleError()
                            // return this.handleError(err, () => next.handle(req.clone()));
                        }
                    }
                ));
        }
    }

    private backToLogin() {
        this.authService.logout();
    }
}