import {Directive, ElementRef, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';
import {Subscription} from 'rxjs';
import {Account} from '../../types/account';
import {Roles} from '../../modules/accounts/infrastructure/types/roles';

@Directive({
  selector: '[appRolesModerate]'
})
export class RolesModerateDirective implements OnInit {

  private sub = new Subscription();
  private account: Account;
  private firstDisplay = '';

  constructor(
    private readonly el: ElementRef,
    private readonly accountService: AccountService,
  ) { }

  public ngOnInit(): void {
    this.firstDisplay = this.el.nativeElement.style.display;
    this.checkRole();
    this.sub.add(
      this.accountService.authUser.subscribe(account => {
        this.account = account;
        this.checkRole();
      }),
    );
  }

  private checkRole(): void {
    if (
      !this.account?.roles?.includes(Roles.moderator) &&
      !this.account?.roles?.includes(Roles.admin)
    ) {
      this.el.nativeElement.style.display = 'none';
    } else {
      this.el.nativeElement.style.display = this.firstDisplay;
    }
  }


}
