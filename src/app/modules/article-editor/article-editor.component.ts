import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../infrastructure/services/account.service';
import {Observable, Subscription} from 'rxjs';
import {Account} from '../../types/account';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Article} from '../../types/article';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit, OnDestroy {

  public editor: any;

  public currentName: string;

  public subs: Subscription = new Subscription();

  public formGroup: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
  });

  public currentUser: Account;

  constructor(
    private readonly accountService: AccountService,
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    this.subs.add(
      this.accountService.authUser.subscribe(user => {
        this.currentUser = user;
        this.currentName = user.firstname + ' ' + user.lastname;
      })
    );

    const params: HttpParams = new HttpParams().append('id', this.route.snapshot.params?.id);
    this.http.get(environment.URLs.article, { params }).subscribe(res => {
      this.formGroup.patchValue(res[0]);
    });
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public onSubmit(): void {
    const body = {
      id: this.route.snapshot.params?.id,
      title: this.formGroup.controls.title.value,
      content: this.formGroup.controls.content.value,
    };
    this.http.patch(environment.URLs.article, body).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

  public onSave(): void {

  }
}
