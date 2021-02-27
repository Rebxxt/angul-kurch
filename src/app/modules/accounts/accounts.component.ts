import { Component, OnInit } from '@angular/core';
import {AccountHttpService} from './infrastructure/account-http.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(
    private readonly accountHttp: AccountHttpService,
  ) { }

  public ngOnInit(): void {
  }


}
