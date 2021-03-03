import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {delay, retryWhen, take} from 'rxjs/operators';

@Injectable()
export class ArticleHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getArticles(): Observable<any> {
    return this.http.get(environment.URLs.articles).pipe(retryWhen(errors => errors.pipe(delay(1000), take(10))));
  }

  public deleteArticle(body): Observable<any> {
    return this.http.delete(environment.URLs.articles, body);
  }

  public likeArticle(body): Observable<any> {
    return this.http.put(environment.URLs.articleRating, body);
  }
}
