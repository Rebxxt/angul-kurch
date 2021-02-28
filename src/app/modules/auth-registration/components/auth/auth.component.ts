import {Component, OnInit} from '@angular/core';
import {AuthHttpService} from '../../infrastructure/services/auth-http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../../infrastructure/types/auth';
import {NotificationService} from '../../../../components/notification/infrastructure/services/notification.service';

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
    private readonly authService: AuthHttpService,
    private readonly notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
  }

  public tryAuth(): void {
    this.authService.auth(this.formGroup.value as Auth).subscribe(result => {
      if (!result) {
        this.notificationService.notify('Неверный логин/пароль', 'error');
      }
    }, err => {
      console.log(err)
    });
  }
}
