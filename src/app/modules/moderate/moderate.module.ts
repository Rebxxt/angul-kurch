import {NgModule} from '@angular/core';
import {ModerateComponent} from './moderate.component';
import {ModerateRoutingModule} from './moderate-routing.module';
import { ArticlesToModerateComponent } from './modules/articles-to-moderate/articles-to-moderate.component';
import { ModeratorMenuComponent } from './modules/moderator-menu/moderator-menu.component';
import {CommonModule} from '@angular/common';
import {MainPageModule} from '../main-page/main-page.module';
import { ArticleCardComponent } from './modules/article-card/article-card.component';
import {ArticleCardHttpService} from './infrastructure/services/article-card-http.service';
import {CommentBlockModule} from '../../components/comment-block/comment-block.module';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';

@NgModule({
  declarations: [
    ModerateComponent,
    ArticlesToModerateComponent,
    ModeratorMenuComponent,
    ArticleCardComponent,
  ],
  imports: [
    ModerateRoutingModule,
    CommonModule,
    MainPageModule,
    CommentBlockModule,
    RatingColorModule,
  ],
  exports: [
    ModerateComponent,
  ],
  providers: [
    ArticleCardHttpService,
  ]
})
export class ModerateModule { }
