import {NgModule} from '@angular/core';
import {SearchContentComponent} from './search-content.component';
import {CommonModule} from '@angular/common';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SearchContentComponent],
  imports: [
    CommonModule,
    RatingColorModule,
    RouterModule
  ],
  exports: [SearchContentComponent]
})
export class SearchContentModule { }
