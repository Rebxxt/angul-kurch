import {Injectable} from '@angular/core';
import {Auth} from '../types/auth';
import {Registration} from '../types/registration';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class AuthHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public auth(authForm: Auth): Observable<Account> {
    const params = new HttpParams().append('login', authForm.login).append('password', authForm.password);
    return this.http.get(environment.URLs.auth, { params }) as Observable<Account>;
  }

  public registration(regForm: Registration): void {
    console.log('reg', regForm)
  }
}
