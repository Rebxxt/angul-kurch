import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../infrastructure/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepeatControlValidator} from '../../infrastructure/validators/repeat-control.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]*$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZА-Я][a-zа-я]*$')]),
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordRepeat: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  public ngOnInit(): void {
  }

  public tryRegistration(): void {

  }
}
