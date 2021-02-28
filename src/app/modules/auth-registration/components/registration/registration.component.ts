import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../infrastructure/services/auth.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {RepeatControlValidator} from '../../infrastructure/validators/repeat-control.validator';

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
    private readonly authService: AuthService,
  ) {
  }

  public ngOnInit(): void {
  }

  public tryRegistration(): void {
    console.log('registration', this.formGroup.value)
  }
}
