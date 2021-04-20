import { Component, OnInit } from '@angular/core';
import {Article} from '../../../../types/article';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ArticleService} from '../../../articles/infrastructure/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../../../infrastructure/services/account.service';
import {ArticleCardHttpService} from '../../infrastructure/services/article-card-http.service';
import {NotificationService} from '../../../../components/notification/infrastructure/services/notification.service';
import {notifyTypes} from '../../../../components/notification/types/notify';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  public currentArticle: Article;
  public load: boolean = false;

  public form: FormGroup = new FormGroup({
    author_id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
  });

  constructor(
    private readonly location: Location,
    private readonly router: Router,
    private readonly articleService: ArticleService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly articleCardHttpService: ArticleCardHttpService,
    private readonly notificationService: NotificationService,
    public accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.articleService.getArticle(this.activatedRoute.snapshot.params.id).subscribe(article => {
      this.currentArticle = article[0];
      this.form.get('title').setValue(this.currentArticle.title);
      this.form.get('content').setValue(this.currentArticle.content);
    }, err => {}, () => {
      this.load = true;
    });
  }

  public ngAfterViewInit(): void {
  }

  public backRoute(): void {
    this.location.back();
  }

  public onSubmit(): void {
  }

  public approveArticle(): void {
    this.articleCardHttpService.updateArticleStatus({ id: this.currentArticle.id, status: true }).subscribe(res => {
      this.notificationService.notify('Статья успешно принята!', 'primary');
      this.router.navigate(['/', 'moderate', 'articles']);
    });
  }

  public warnArticle(): void {
    this.articleCardHttpService.updateArticleStatus({ id: this.currentArticle.id, status: false }).subscribe(res => {
      this.notificationService.notify('Статья успешно отправлена на редактирование!', 'warning');
      this.router.navigate(['/', 'moderate', 'articles']);
    });
  }

  public deleteArticle(): void {
    this.articleCardHttpService.deleteArticle(this.currentArticle.id).subscribe(res => {
      this.notificationService.notify('Статья удалена!', 'error');
      this.router.navigate(['/', 'moderate', 'articles']);
    });
  }
}
