import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Params} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ArticleCreaterHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public sendArticle(post: Params): Observable<any> {
    return this.http.post(environment.URLs.articles, post);
  }
}
