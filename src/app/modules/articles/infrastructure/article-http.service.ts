import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../../../types/article';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ArticleHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getArticle(id): Observable<Article> {
    const params: HttpParams = new HttpParams().append('id', id);
    return this.http.get(environment.URLs.article, { params }) as Observable<Article>;
  }
}
