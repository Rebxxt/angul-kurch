import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleCreaterService} from './infrastructure/article-creater.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Subscription} from 'rxjs';
import {Account} from '../../types/account';

@Component({
  selector: 'app-article-creater',
  templateUrl: './article-creater.component.html',
  styleUrls: ['./article-creater.component.scss']
})
export class ArticleCreaterComponent implements OnInit, OnDestroy {

  public editor: any;

  public currentName: string;

  public subs: Subscription = new Subscription();

  public formGroup: FormGroup = new FormGroup({
    author_id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
  });

  public currentUser: Account;

  constructor(
    private readonly articleCreaterService: ArticleCreaterService,
    private readonly accountService: AccountService,
  ) { }

  public ngOnInit(): void {
    this.subs.add(
      this.accountService.authUser.subscribe(user => {
        this.currentUser = user;
        this.currentName = user.firstname + ' ' + user.lastname;
        this.formGroup.get('author_id').setValue(user.id);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public onSubmit(): void {
    this.articleCreaterService.sendArticle(this.formGroup.value);
  }

  public onSave(): void {

  }
}
