import {NgModule} from '@angular/core';
import {CommentsLvlComponent} from './comments-lvl.component';
import {CommentCardModule} from '../comment-card/comment-card.module';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [CommentsLvlComponent],
  imports: [
    CommentCardModule,
    CommonModule
  ],
  declarations: [CommentsLvlComponent]
})
export class CommentsLvlModule { }
