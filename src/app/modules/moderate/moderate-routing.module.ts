import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ArticlesToModerateComponent} from './modules/articles-to-moderate/articles-to-moderate.component';
import {ModerateComponent} from './moderate.component';
import {ModeratorMenuComponent} from './modules/moderator-menu/moderator-menu.component';
import {ArticleCardComponent} from './modules/article-card/article-card.component';

const moderateRoutes: Routes = [
  {
    path: '',
    component: ModeratorMenuComponent,
  },
  {
    path: 'articles',
    component: ArticlesToModerateComponent,
  },
  {
    path: 'article/:id',
    component: ArticleCardComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    component: ModerateComponent,
    children: moderateRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModerateRoutingModule {}
