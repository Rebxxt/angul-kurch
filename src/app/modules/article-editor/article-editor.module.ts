import {NgModule} from '@angular/core';
import {ArticleEditorComponent} from './article-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {RouterModule} from '@angular/router';

@NgModule({
  exports: [ArticleEditorComponent],
  imports: [
    ReactiveFormsModule,
    QuillModule,
    RouterModule
  ],
  declarations: [ArticleEditorComponent]
})
export class ArticleEditorModule { }
