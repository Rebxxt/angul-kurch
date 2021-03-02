import {NgModule} from '@angular/core';
import {ArticlesComponent} from './articles.component';

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  exports: [
    ArticlesComponent,
  ]
})
export class ArticlesModule { }
