import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountHttpService} from './infrastructure/account-http.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Account} from '../../types/account';
import {RolesToNamesService} from './infrastructure/roles-to-names.service';
import {Roles} from './infrastructure/types/roles';
import {Tab} from '../../components/tabs-controller/infrastructure/types/tab';
import {PublicationArticlesTabComponent} from './components/tabs/publication-articles-tab/publication-articles-tab.component';
import {WaitingModerateArticlesTabComponent} from './components/tabs/waiting-moderate-articles-tab/waiting-moderate-articles-tab.component';
import {LikesArticlesTabComponent} from './components/tabs/likes-articles-tab/likes-articles-tab.component';

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

  public currentAccountId: number = null;
  public currentAccount: Account;

  public pic;

  public tabs: Tab[] = [
    {
      component: PublicationArticlesTabComponent,
      title: 'Опубликованные статьи',
    },
    {
      component: WaitingModerateArticlesTabComponent,
      title: 'На модерации',
      show: this.currentAccountId === this.accountService.authAccountId ? 'block' : 'none',
    },
    {
      component: LikesArticlesTabComponent,
      title: 'Понравивившиеся статьи',
    },
  ];

  private subs: Subscription = new Subscription();

  constructor(
    public accountService: AccountService,
    public roleToNamesService: RolesToNamesService,
    private readonly accountHttp: AccountHttpService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly rolesToNamesService: RolesToNamesService,
  ) { }

  public ngOnInit(): void {
    this.initAccount();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public roleName(role: string): string {
    return this.rolesToNamesService.toDisplayName(role);
  }

  public get roles(): string[] {
    return Object.keys(Roles);
  }

  public getRoles(): string {
    return this.currentAccount?.roles?.map(role => this.roleToNamesService.toDisplayName(role)).join(', ');
  }

  public uploadImageAccount(file: File): void {
    if (imageAccess.includes(file.type)) {
      this.accountHttp.setAccountPic(this.currentAccountId, file, () => this.initAccount());
    }
  }

  private initAccount(): void {
    this.activatedRoute.params.subscribe(el => {
      this.accountService.getAuthUser(el.id, true).subscribe(account => {
        this.currentAccountId = account.id;
        this.currentAccount = account;
        this.pic = account.pic;

        const indTab = this.tabs.findIndex(el => el.component === WaitingModerateArticlesTabComponent);
        this.tabs[indTab].show = this.currentAccountId === this.accountService.authAccountId ? 'block' : 'none';
      });
    });
  }
}
