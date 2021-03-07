import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {delay, retryWhen, take} from 'rxjs/operators';

@Injectable()
export class ArticleHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getArticles(deleted: boolean = false, moderateCheck: boolean = true, moderateApply: boolean = true): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('deleted', deleted.toString())
      .append('moderate_check', moderateCheck.toString())
      .append('moderate_apply', moderateApply.toString());
    return this.http.get(environment.URLs.articles, { params }).pipe(retryWhen(errors => errors.pipe(delay(1000), take(10))));
  }

  public deleteArticle(body): Observable<any> {
    return this.http.delete(environment.URLs.articles, { params: body });
  }

  public likeArticle(body): Observable<any> {
    return this.http.put(environment.URLs.articleRating, body);
  }
}
