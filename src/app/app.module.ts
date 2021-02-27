import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AccountModule} from './modules/accounts/account.module';
import {MainPageModule} from './modules/main-page/main-page.module';
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.component';
import { SectionPageComponent } from './modules/section-page/section-page.component';
import {AuthRegistrationModule} from './modules/auth-registration/auth-registration.module';
import { TabsControllerComponent } from './components/tabs-controller/tabs-controller.component';
import {TabsControllerModule} from './components/tabs-controller/tabs-controller.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
