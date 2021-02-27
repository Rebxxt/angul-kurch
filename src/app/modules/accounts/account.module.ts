import {NgModule} from '@angular/core';
import {AccountsComponent} from './accounts.component';
import {AccountHttpService} from './infrastructure/account-http.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AccountsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    AccountHttpService
  ]
})
export class AccountModule {
}
