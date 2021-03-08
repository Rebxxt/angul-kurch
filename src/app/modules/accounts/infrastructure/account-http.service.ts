import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AccountHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public setAccountPic(id: number, pic: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', pic);
    formData.append('id', id.toString());
    const headers = new HttpHeaders().append('Content-Type', 'multipart/form-data').append('enctype', 'multipart/form-data');
    return this.http.post(environment.URLs.accountPic, formData, { headers });
  }
}
