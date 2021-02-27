import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthComponent} from './components/auth/auth.component';
import {Tab} from '../../components/tabs-controller/infrastructure/types/tab';

@Component({
  selector: 'app-auth-registration',
  templateUrl: './auth-registration.component.html',
  styleUrls: ['./auth-registration.component.scss']
})
export class AuthRegistrationComponent implements AfterViewInit {

  @ViewChild('dialogView', { read: ViewContainerRef }) dialogView: ViewContainerRef;

  public tabs: Tab[] = [
    {
      title: 'Авторизация',
      component: AuthComponent,
    },
    {
      title: 'Регистрация',
      component: RegistrationComponent,
    }
  ];


  constructor(
    private readonly componentFactory: ComponentFactoryResolver,
  ) { }

  public ngAfterViewInit(): void {
    // this.setAuthComponent();
  }
}
