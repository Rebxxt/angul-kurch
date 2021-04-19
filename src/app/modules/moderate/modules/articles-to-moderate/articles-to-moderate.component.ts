import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../types/article';
import {AccountService} from '../../../../infrastructure/services/account.service';
import {ArticleHttpService} from '../../../main-page/infrastucture/article-http.service';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articles-to-moderate',
  templateUrl: './articles-to-moderate.component.html',
  styleUrls: ['./articles-to-moderate.component.scss']
})
export class ArticlesToModerateComponent implements OnInit {

  public articles: Article[];

  constructor(
    public accountService: AccountService,
    private readonly articleHttp: ArticleHttpService,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.waiting === 'true') {
      this.getArticles(true);
    } else {
      this.getArticles();
    }
  }

  public deleteArticle(id): void {
    const body: HttpParams = new HttpParams().append('id', id);
    this.articleHttp.deleteArticle(body).subscribe(result => {
      this.articles = this.articles.filter(article => article.id !== id);
    });
  }

  public getArticles(check = false, moderateApply = false): void {
    this.articleHttp.getArticles(false, check, moderateApply).subscribe(result => {
      this.articles = result;
    });
  }
}
