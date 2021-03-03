import {Injectable, Type} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {Notify, notifyTypes} from '../../types/notify';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  private _show: ReplaySubject<Notify | null> = new ReplaySubject<Notify | null>(1);
  public get show(): Observable<Notify | null> {
    return this._show.asObservable();
  }

  constructor() {
  }

  public notify(message: string, type: typeof notifyTypes): void {
    this._show.next({ message, type });
    setTimeout(() => this._show.next(), 5000);
  }
}
