import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AccountHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

}
