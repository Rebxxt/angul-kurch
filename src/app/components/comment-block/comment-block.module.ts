import {NgModule} from '@angular/core';
import {CommentBlockComponent} from './comment-block.component';
import {CommentsHttpService} from './services/comments-http.service';
import {CommonModule} from '@angular/common';
import {CommentsService} from './services/comments.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';

@NgModule({
  declarations: [
    CommentBlockComponent,
  ],
  exports: [
    CommentBlockComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RatingColorModule,
  ],
  providers: [
    CommentsHttpService,
    CommentsService,
  ]
})
export class CommentBlockModule { }