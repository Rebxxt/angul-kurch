import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {NotificationService} from '../../../components/notification/infrastructure/services/notification.service';

@Injectable()
export class AccountHttpService {
  constructor(
    private readonly http: HttpClient,
    private readonly notificationService: NotificationService,
  ) {
  }


  public setAccountPic(id: number, pic: File, callback?: any): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string);
      const formData = new FormData();
      formData.append('file', base64String);
      formData.append('id', id.toString());
      this.http.post(environment.URLs.accountPic, formData).subscribe(() => {}, err => {
        this.notificationService.notify('Произошла неизвестная ошибка', 'error');
      });

      if (callback) {
        callback();
      }
    };
    reader.readAsDataURL(pic);

  }
}
