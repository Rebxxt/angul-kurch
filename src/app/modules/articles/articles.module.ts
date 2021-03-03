import {NgModule} from '@angular/core';
import {ArticlesComponent} from './articles.component';
import {ArticleHttpService} from './infrastructure/article-http.service';
import {ArticleService} from './infrastructure/article.service';
import {CommonModule} from '@angular/common';
import {MainPageModule} from '../main-page/main-page.module';
import {ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';

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
  ],
  providers: [
    ArticleHttpService,
    ArticleService,
  ]
})
export class ArticlesModule { }
