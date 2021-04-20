import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Account} from '../../types/account';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {delay, retryWhen, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public admin = false;

  public authAccountId: number;

  private _authUser: BehaviorSubject<Account> = new BehaviorSubject<Account>(new Account());
  public get authUser(): Observable<Account> {
    return this._authUser.asObservable();
  }

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
    this.initEvents();
    if (sessionStorage.getItem('token')) {
      this.getUserByToken();
    }
  }

  public getAuthUser(id, pic: boolean = false): Observable<any> {
    const params: HttpParams = new HttpParams().append('id', id.toString()).append('takePic', pic.toString());
    return this.http.get(environment.URLs.account, { params });
  }

  public setAuthUser(value: Account): void {
    this.authAccountId = value.id
    this._authUser.next(value);
    if (value.login === 'admin@ad') {
      this.admin = true;
    }
  }

  public clearAuthUser(): void {
    sessionStorage.removeItem('token');
    this.setAuthUser(new Account());
  }

  public getUserByToken(): void {
    const params: HttpParams = new HttpParams().append('token', sessionStorage.getItem('token'));
    this.http.get(environment.URLs.token, { params }).pipe(retryWhen(errors => errors.pipe(delay(1000), take(10))))
      .subscribe((user: Account) => {
        this.setAuthUser(user);
      });
  }

  private async checkToken(): Promise<boolean> {
    const params: HttpParams = new HttpParams().append('token', sessionStorage.getItem('token'));
    return await this.http.get(environment.URLs.token, { params }).toPromise().then(el => {
      return !!el;
    });
  }

  private initEvents(): void {
    this.router.events.subscribe(async e => {
      if (e instanceof NavigationStart) {
        // if (await this.checkToken()) {
        //   // TODO сделать проверку актуальности токена
        // }
      }
    });
  }
}
