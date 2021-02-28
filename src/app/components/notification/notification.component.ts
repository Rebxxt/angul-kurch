import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from './infrastructure/services/notification.service';
import {Subscription} from 'rxjs';
import {Notify} from './types/notify';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  public subs: Subscription = new Subscription();
  public notify: Notify;

  constructor(
    private readonly notificationService: NotificationService,
  ) { }

  public ngOnInit(): void {
    this.subs.add(
      this.notificationService.show.subscribe(notify => {
        this.notify = notify;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
