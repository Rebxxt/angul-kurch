import {NgModule} from '@angular/core';
import {ArticlesComponent} from './articles.component';
import {ArticleHttpService} from './infrastructure/article-http.service';
import {ArticleService} from './infrastructure/article.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  exports: [
    ArticlesComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ArticleHttpService,
    ArticleService,
  ]
})
export class ArticlesModule { }
