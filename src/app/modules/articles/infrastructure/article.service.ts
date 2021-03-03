import {Injectable} from '@angular/core';
import {ArticleHttpService} from './article-http.service';
import {Article} from '../../../types/article';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(
    private readonly articleHttpService: ArticleHttpService,
  ) {
  }

  public getArticle(id: number): Observable<Article> {
    return this.articleHttpService.getArticle(id);
  }
}
