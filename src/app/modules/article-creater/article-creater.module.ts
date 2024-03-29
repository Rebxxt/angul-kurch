import {NgModule} from '@angular/core';
import {ArticleCreaterComponent} from './article-creater.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ArticleCreaterService} from './infrastructure/article-creater.service';
import {ArticleCreaterHttpService} from './infrastructure/article-creater-http.service';
import {QuillModule} from 'ngx-quill';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        ReactiveFormsModule,
        QuillModule.forRoot(),
        RouterModule,
    ],
  declarations: [
    ArticleCreaterComponent,
  ],
  providers: [
    ArticleCreaterService,
    ArticleCreaterHttpService,
  ]
})
export class ArticleCreaterModule { }
