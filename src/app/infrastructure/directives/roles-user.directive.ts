import {Directive, ElementRef, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';
import {Subscription} from 'rxjs';
import {Account} from '../../types/account';
import {Roles} from '../../modules/accounts/infrastructure/types/roles';

@Directive({
  selector: '[appRolesUser]'
})
export class RolesUserDirective implements OnInit {

  private sub = new Subscription();
  private account: Account;

  constructor(
    private readonly el: ElementRef,
    private readonly accountService: AccountService,
  ) { }

  public ngOnInit(): void {
    this.sub.add(
      this.accountService.authUser.subscribe(account => {
        this.account = account;
        this.checkRole();
      }),
    );
  }

  private checkRole(): void {
    if (this.account?.id == undefined) {
      this.el.nativeElement.remove();
    }
  }

}
