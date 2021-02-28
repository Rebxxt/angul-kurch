import {NgModule} from '@angular/core';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthRegistrationComponent} from './auth-registration.component';
import {TabsControllerModule} from '../../components/tabs-controller/tabs-controller.module';
import {AuthService} from './infrastructure/services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    RegistrationComponent,
    AuthComponent,
    AuthRegistrationComponent,
  ],
  imports: [
    TabsControllerModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthService]
})
export class AuthRegistrationModule {}
