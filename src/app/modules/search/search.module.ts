import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchContentModule} from '../../components/search-content/search-content.module';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {MainPageModule} from '../main-page/main-page.module';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    ReactiveFormsModule,
    SearchContentModule,
    AngularSvgIconModule,
    MainPageModule
  ]
})
export class SearchModule {
}
