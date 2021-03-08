import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountHttpService} from './infrastructure/account-http.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Account} from '../../types/account';
import {RolesToNamesService} from './infrastructure/roles-to-names.service';

const imageAccess = [
  'image/jpg',
  'image/jpeg',
  'image/bmp',
];

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  public currentAccountId;
  public currentAccount: Account;

  public pic;

  private subs: Subscription = new Subscription();

  constructor(
    public accountService: AccountService,
    public roleToNamesService: RolesToNamesService,
    private readonly accountHttp: AccountHttpService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.initAccount();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  public getRoles(): string {
    return this.currentAccount?.roles?.map(role => this.roleToNamesService.toDisplayName(role)).join(', ');
  }

  public uploadImageAccount(file: File): void {
    if (imageAccess.includes(file.type)) {
      this.accountHttp.setAccountPic(this.currentAccountId, file, () => this.initAccount());
    }
  }

  private initAccount() {
    this.activatedRoute.params.subscribe(el => {
      this.accountService.getAuthUser(el.id, true).subscribe(account => {
        this.currentAccountId = account.id;
        this.currentAccount = account;
        this.pic = account.pic;
      });
    });
  }
}
