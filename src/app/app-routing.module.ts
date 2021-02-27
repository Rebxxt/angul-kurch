import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent} from './modules/accounts/accounts.component';
import {NgModule} from '@angular/core';
import {MainPageComponent} from './modules/main-page/main-page.component';
import {SectionPageComponent} from './modules/section-page/section-page.component';

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
    path: 'sections',
    component: SectionPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
