import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MainPageComponent} from './main-page.component';
import {ArticleHttpService} from './infrastucture/article-http.service';
import {RatingColorDirective} from '../../infrastructure/directives/rating-color.directive';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    MainPageComponent,
    RatingColorDirective,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    ArticleHttpService,
  ]
})
export class MainPageModule {
}
