import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  public deleteArticle(id: number): Observable<any> {
    const body: HttpParams = new HttpParams().append('id', id.toString());
    return this.http.delete(environment.URLs.articles, { params: body });
  }
}
