import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountHttpService} from './infrastructure/account-http.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  public currentAccountId;

  private subs: Subscription = new Subscription();

  constructor(
    public accountService: AccountService,
    private readonly accountHttp: AccountHttpService,
  ) { }

  public ngOnInit(): void {
    this.subs.add(
      this.accountService.currentAccount.subscribe(account => this.currentAccountId = account.id)
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
