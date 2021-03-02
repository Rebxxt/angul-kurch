import {Component, OnInit} from '@angular/core';
import {AuthHttpService} from '../../infrastructure/services/auth-http.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {RepeatControlValidator} from '../../infrastructure/validators/repeat-control.validator';
import {Registration} from '../../infrastructure/types/registration';
import {NotificationService} from '../../../../components/notification/infrastructure/services/notification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public passwordControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: this.passwordControl,
    passwordRepeat: new FormControl(''),
  });

  // public formGroup: FormGroup = new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]*$')]),
  //   lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]*$')]),
  //   login: new FormControl('', [Validators.required, Validators.email]),
  //   password: this.passwordControl,
  //   passwordRepeat: new FormControl('', [Validators.required, RepeatControlValidator.repeat(this.passwordControl)]),
  // });

  constructor(
    private readonly authService: AuthHttpService,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
  }

  public tryRegistration(): void {
    this.authService.registration(this.formGroup.value as Registration).subscribe(result => {
      console.log('RESULT', result)
      if (!result) {
        this.notificationService.notify('Пользователь с таким email уже существует', 'error');
      } else {
        localStorage.setItem('user_login', this.formGroup.value.login);
        this.router.navigate(['/']);
      }
    }, err => {
      this.notificationService.notify('Произошла ошибка регистрации', 'error');
    });
  }
}
