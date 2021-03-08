import {NgModule} from '@angular/core';
import {AccountsComponent} from './accounts.component';
import {AccountHttpService} from './infrastructure/account-http.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MainPageModule} from '../main-page/main-page.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {TabsControllerModule} from '../../components/tabs-controller/tabs-controller.module';
import { PublicationArticlesTabComponent } from './components/tabs/publication-articles-tab/publication-articles-tab.component';
import { WaitingModerateArticlesTabComponent } from './components/tabs/waiting-moderate-articles-tab/waiting-moderate-articles-tab.component';
import { LikesArticlesTabComponent } from './components/tabs/likes-articles-tab/likes-articles-tab.component';
import {RatingColorModule} from '../../infrastructure/directives/rating-color.module';

@NgModule({
  declarations: [
    AccountsComponent,
    PublicationArticlesTabComponent,
    WaitingModerateArticlesTabComponent,
    LikesArticlesTabComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MainPageModule,
        MatFormFieldModule,
        MatSelectModule,
        TabsControllerModule,
        RatingColorModule,
    ],
  providers: [
    AccountHttpService
  ]
})
export class AccountModule {
}
