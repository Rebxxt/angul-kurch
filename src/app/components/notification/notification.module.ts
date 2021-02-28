import {NgModule} from '@angular/core';
import {NotificationComponent} from './notification.component';
import {ConvertTypeNotificationPipe} from './infrastructure/pipes/convert-type-notification.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NotificationComponent,
    ConvertTypeNotificationPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent
  ],
  providers: [
    ConvertTypeNotificationPipe,
  ]
})
export class NotificationModule { }
