import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../types/account';
import {Observable, ReplaySubject} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private _currentAccount: ReplaySubject<Account> = new ReplaySubject<Account>(1);
  public get currentAccount(): Observable<Account> {
    return this._currentAccount.asObservable();
  }

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
    this._currentAccount.next(this.generateTempAccount());
    this.initEvents();
  }

  private checkToken(): boolean {
    return true;
  }

  private generateTempAccount(): Account {
    const account = new Account();
    account.firstname = 'FirstName';
    account.lastname = 'SecondName';
    account.id = 0;
    account.login = 'tempGeneratedUser@gmail.com';

    return account;
  }

  private initEvents(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if (this.checkToken()) {
          // TODO сделать проверку актуальности токена
          console.log('CHECK AUTH');
        }
      }
    });
  }
}
