import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from '../../infrastructure/services/account.service';
import {Account} from '../../types/account';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.scss']
})
export class HeaderNavBarComponent implements OnInit, OnDestroy {

  public currentAccount: Account;
  public currentAccountId: number;

  private readonly subs: Subscription = new Subscription();

  constructor(
    private readonly accountService: AccountService,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    this.subs.add(
      this.accountService.authUser.subscribe(account => {
        this.currentAccountId = account.id;
        this.currentAccount = account;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public exitAuth(): void {
    this.accountService.clearAuthUser();
    this.router.navigate(['/auth']);
  }
}
