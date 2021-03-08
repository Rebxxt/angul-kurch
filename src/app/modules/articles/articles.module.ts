import {NgModule} from '@angular/core';
import {ArticlesComponent} from './articles.component';
import {ArticleHttpService} from './infrastructure/article-http.service';
import {ArticleService} from './infrastructure/article.service';
import {CommonModule} from '@angular/common';
import {MainPageModule} from '../main-page/main-page.module';
import {ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {CommentBlockModule} from '../../components/comment-block/comment-block.module';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  exports: [
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    MainPageModule,
    ReactiveFormsModule,
    QuillModule,
    CommentBlockModule,
    RatingColorModule,
  ],
  providers: [
    ArticleHttpService,
    ArticleService,
  ]
})
export class ArticlesModule { }
