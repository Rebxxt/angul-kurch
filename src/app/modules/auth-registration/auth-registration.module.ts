import {NgModule} from '@angular/core';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthRegistrationComponent} from './auth-registration.component';
import {TabsControllerModule} from '../../components/tabs-controller/tabs-controller.module';

@NgModule({
  declarations: [
    RegistrationComponent,
    AuthComponent,
    AuthRegistrationComponent,
  ],
  imports: [
    TabsControllerModule
  ]
})
export class AuthRegistrationModule {}
