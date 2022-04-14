import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/common/auth.service';
import { NotificationService } from '../services/common/toast-service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        private notifyService: NotificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(error => {
            if (error.status === 401) {
                this.showErrorMessage(error, "410 Unauthorised");
                this.authenticationService.logout();
            }
            if (error.status == 422) {
                this.showErrorMessage(error, "422 Validation Error");
                return throwError(error);
            }
            if (error.status == 404) {
                this.showErrorMessage(error, "404 Error");
                return throwError(error);
            }
            if (error.status == 400) {
                if (error.statusText == 'invalid_grant') {
                    error.statusText = 'session expired, please relogin to continue';
                    this.showErrorMessage(error, "Session Timeout");
                    return throwError(error);
                }
                else {
                    this.show400ErrorMessage(error, "Validation Error");
                    return throwError(error);
                }
            }
            if (error.status == 500) {
                this.showErrorMessage(error, "500 Error")
                return throwError(error);
            }
            else {
                return throwError(error);
            }
        }));
    }

    private show400ErrorMessage(error, errorType) {
        var keys = Object.keys(error.error);
        var msg = '';
        keys.forEach((value, index) => {

            if (value != "data" && value != "message" && value != "errors" && value != "success") {
                if (error.error[value] != undefined) {
                    msg = msg + error.error[value];
                }
            }
        });
        this.notifyService.showError(msg, errorType);
    }

    private showErrorMessage(error, errorType) {
        var keys = Object.keys(error.statusText);
        var msg = '';
        keys.forEach((value, index) => {
            if (error.statusText[value] != undefined) {
                msg = msg + error.statusText[value];
            }
        });
        this.notifyService.showError(msg, errorType);
    }
}