import {NgModule} from '@angular/core';
import {CommentCardComponent} from './comment-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RatingColorModule} from '../../../../infrastructure/directives/rating-color.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RolesUserDirective} from '../../../../infrastructure/directives/roles-user.directive';

@NgModule({
  exports: [CommentCardComponent],
  declarations: [
    CommentCardComponent,
    RolesUserDirective,
  ],
  imports: [
    ReactiveFormsModule,
    RatingColorModule,
    RouterModule,
    CommonModule,
  ]
})
export class CommentCardModule { }
