import {NgModule} from '@angular/core';
import {AccountsComponent} from './accounts.component';
import {AccountHttpService} from './infrastructure/account-http.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MainPageModule} from '../main-page/main-page.module';

@NgModule({
  declarations: [
    AccountsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MainPageModule,
  ],
  providers: [
    AccountHttpService
  ]
})
export class AccountModule {
}
