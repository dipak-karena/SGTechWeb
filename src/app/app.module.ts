import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { LoaderInterceptorService } from './core/interceptors/loader-interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
//import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { SimplebarAngularModule } from 'simplebar-angular';

import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationService } from './core/services/common/auth.service';
//import { appInitializer } from './core/interceptors/app.initializer';
export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SimplebarAngularModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    NgbModule,
    CoreModule,
    //LayoutsModule,
    
    AppRoutingModule,
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //{ provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
  //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
