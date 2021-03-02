import {Component, OnInit} from '@angular/core';
import {AuthHttpService} from '../../infrastructure/services/auth-http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../../infrastructure/types/auth';
import {NotificationService} from '../../../../components/notification/infrastructure/services/notification.service';
import {Router} from '@angular/router';
import {AccountService} from '../../../../infrastructure/services/account.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public serverError = false;

  constructor(
    private readonly accountService: AccountService,
    private readonly authService: AuthHttpService,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

    }
  }

  public tryAuth(): void {
    this.authService.auth(this.formGroup.value as Auth).subscribe((result) => {
      console.log(result);
      if (!result) {
        this.notificationService.notify('Неверный логин/пароль', 'error');
      } else {
        this.accountService.setAuthUser(result);
        localStorage.setItem('token', result.token);
        this.router.navigate(['/']);
      }
    }, err => {
      this.notificationService.notify('Неверный логин/пароль', 'error');
    });
  }
}
