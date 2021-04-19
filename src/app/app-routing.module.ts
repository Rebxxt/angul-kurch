import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent} from './modules/accounts/accounts.component';
import {NgModule} from '@angular/core';
import {MainPageComponent} from './modules/main-page/main-page.component';
import {SectionPageComponent} from './modules/section-page/section-page.component';
import {AuthRegistrationComponent} from './modules/auth-registration/auth-registration.component';
import {ArticlesComponent} from './modules/articles/articles.component';
import {ArticleCreaterComponent} from './modules/article-creater/article-creater.component';
import {AdminRootsGuard} from './infrastructure/guards/admin-roots.guard';
import {GuardErrorComponent} from './modules/guard-error/guard-error.component';
import {SearchComponent} from './modules/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'account/:id',
    component: AccountsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'sections',
    component: SectionPageComponent,
  },
  {
    path: 'auth',
    component: AuthRegistrationComponent,
  },
  {
    path: 'article/create',
    component: ArticleCreaterComponent,
  },
  {
    path: 'article/:id',
    component: ArticlesComponent,
  },
  {
    path: 'moderate',
    canActivate: [AdminRootsGuard],
    loadChildren: () => import('./modules/moderate/moderate.module').then(m => m.ModerateModule),
  },
  {
    path: 'no-access',
    component: GuardErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
