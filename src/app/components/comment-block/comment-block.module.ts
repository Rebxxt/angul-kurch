import {NgModule} from '@angular/core';
import {CommentBlockComponent} from './comment-block.component';
import {CommentsHttpService} from './services/comments-http.service';
import {CommonModule} from '@angular/common';
import {CommentsService} from './services/comments.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';
import { CommentsLvlComponent } from './components/comments-lvl/comments-lvl.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';

@NgModule({
  declarations: [
    CommentBlockComponent,
    CommentsLvlComponent,
    CommentCardComponent,
  ],
  exports: [
    CommentBlockComponent,
    CommentsLvlComponent,
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
