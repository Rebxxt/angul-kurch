import {Injectable} from '@angular/core';
import {Auth} from '../../../../types/auth';

@Injectable()
export class AuthService {
  constructor() {
  }

  public auth(authForm: Auth): void {
    console.log('auth', authForm)
  }

  public registration(): void {

  }
}
