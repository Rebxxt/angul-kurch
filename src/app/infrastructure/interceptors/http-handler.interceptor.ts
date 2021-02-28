import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotificationService} from '../../components/notification/infrastructure/services/notification.service';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor(
    private readonly notificationService: NotificationService,
  ) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 504) {
          this.notificationService.notify('Ошибка соединения с сервером', 'error');
        }
        throw err;
      })
    );
  }

}
