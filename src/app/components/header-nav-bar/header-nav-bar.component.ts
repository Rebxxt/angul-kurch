import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from '../../infrastructure/services/account.service';
import {Account} from '../../types/account';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.scss']
})
export class HeaderNavBarComponent implements OnInit, OnDestroy {

  public currentAccount: Account;

  private readonly subs: Subscription = new Subscription();

  constructor(
    private readonly accountService: AccountService,
  ) { }

  public ngOnInit(): void {
    this.subs.add(
      this.accountService.authUser.subscribe(account => this.currentAccount = account)
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
