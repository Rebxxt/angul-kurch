import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../types/article';
import {AccountService} from '../../../../infrastructure/services/account.service';
import {ArticleHttpService} from '../../infrastucture/article-http.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input('articles') articles: Article[];

  constructor(
    public accountService: AccountService,
    private readonly articleHttp: ArticleHttpService,
  ) {
  }

  ngOnInit(): void {
  }

  public deleteArticle(id): void {
    console.log('delete', id)
    const body: HttpParams = new HttpParams().append('id', id);
    this.articleHttp.deleteArticle(body).subscribe(result => {
      console.log('DELETE RESULT', result, this.articles, id);
      this.articles = this.articles.filter(article => article.id !== id);
    });
  }
}
