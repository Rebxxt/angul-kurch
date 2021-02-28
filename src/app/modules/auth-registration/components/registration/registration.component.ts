import {Component, OnInit} from '@angular/core';
import {AuthHttpService} from '../../infrastructure/services/auth-http.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {RepeatControlValidator} from '../../infrastructure/validators/repeat-control.validator';
import {Registration} from '../../infrastructure/types/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public passwordControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]*$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]*$')]),
    login: new FormControl('', [Validators.required, Validators.email]),
    password: this.passwordControl,
    passwordRepeat: new FormControl('', [Validators.required, RepeatControlValidator.repeat(this.passwordControl)]),
  });

  constructor(
    private readonly authService: AuthHttpService,
  ) {
  }

  public ngOnInit(): void {
  }

  public tryRegistration(): void {
    this.authService.registration(this.formGroup.value as Registration);
  }
}
