import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../infrastructure/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  public tryAuth(): void {
    this.authService.auth();
  }
}
