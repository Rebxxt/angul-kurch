import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from '../services/account.service';
import {Account} from '../../types/account';
import {Roles} from '../../modules/accounts/infrastructure/types/roles';

@Injectable({
  providedIn: 'root'
})
export class AdminRootsGuard implements CanActivate {
  private currentAccount: Account;

  constructor(
    private readonly accountService: AccountService,
    private readonly router: Router,
  ) {
    this.accountService.authUser.subscribe(el => {
      this.currentAccount = el;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentAccount?.roles?.includes(Roles.admin) || this.currentAccount?.roles?.includes(Roles.moderator)) {
      return true;
    } else {
      this.router.navigate(['/', 'no-access']);
      return false;
    }
  }

}
