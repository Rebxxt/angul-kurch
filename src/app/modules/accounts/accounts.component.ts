import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountHttpService} from './infrastructure/account-http.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

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
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(el => {
      this.currentAccountId = el.id;
    })
    this.subs.add(
      this.accountService.authUser.subscribe(account => this.currentAccountId = account.id)
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
