import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MainPageComponent} from './main-page.component';
import {ArticleHttpService} from './infrastucture/article-http.service';
import {RatingColorDirective} from '../../infrastructure/directives/rating-color.directive';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import {RolesAdminDirective} from '../../infrastructure/directives/roles-admin.directive';
import {RolesModerateDirective} from '../../infrastructure/directives/roles-moderate.directive';
import {CommentBlockModule} from '../../components/comment-block/comment-block.module';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';
import {RolesUserDirective} from '../../infrastructure/directives/roles-user.directive';

@NgModule({
  declarations: [
    MainPageComponent,
    ArticleCardComponent,
    ArticlePageComponent,
    RolesAdminDirective,
    RolesModerateDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CommentBlockModule,
    RatingColorModule,
  ],
  exports: [
    RolesAdminDirective,
    RolesModerateDirective,
  ],
  providers: [
    ArticleHttpService,
  ]
})
export class MainPageModule {
}
