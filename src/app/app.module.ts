import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AccountModule} from './modules/accounts/account.module';
import {MainPageModule} from './modules/main-page/main-page.module';
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.component';
import { SectionPageComponent } from './modules/section-page/section-page.component';
import {AuthRegistrationModule} from './modules/auth-registration/auth-registration.module';
import {TabsControllerModule} from './components/tabs-controller/tabs-controller.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NotificationModule} from './components/notification/notification.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpHandlerInterceptor} from './infrastructure/interceptors/http-handler.interceptor';
import {ArticlesModule} from './modules/articles/articles.module';
import {ArticleCreaterModule} from './modules/article-creater/article-creater.module';
import {QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavBarComponent,
    SectionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    MainPageModule,
    AuthRegistrationModule,
    TabsControllerModule,
    ReactiveFormsModule,
    NotificationModule,
    ArticlesModule,
    ArticleCreaterModule,
    QuillModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true,
    },
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
