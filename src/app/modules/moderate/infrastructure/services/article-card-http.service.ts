import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleStatusRequest} from '../types/article-status-request';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleCardHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public updateArticleStatus(article: ArticleStatusRequest): Observable<any> {
    return this.http.put(environment.URLs.articleStatus, article);
  }
}
