import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoaderService } from '../services/common/loader.service';


@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
    constructor(private loaderService: LoaderService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.loaderService.hide();
                }
            }, (error) => {
                this.loaderService.hide();
            })
        );
        // return next.handle(request).pipe(map(event => {
        //     if (event instanceof HttpResponse) {
        //         this.loaderService.hide();
        //     }
        //     else if (event instanceof HttpErrorResponse) {
        //         this.loaderService.hide();
        //     }
        //     return event;
        // }));
    }
}