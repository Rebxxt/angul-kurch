import {NgModule} from '@angular/core';
import {TabsControllerComponent} from './tabs-controller.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TabsControllerComponent
  ],
  declarations: [
    TabsControllerComponent,
  ]
})
export class TabsControllerModule { }
