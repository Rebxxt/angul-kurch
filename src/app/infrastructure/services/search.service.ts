import {Injectable} from '@angular/core';
import {Article} from '../../types/article';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public articles: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public searchArticles(searchText: string, moderateEnable: boolean): void {
    if (searchText.trim().length === 0) { return; }

    this.http.get(environment.URLs.articles, {
      params: {
        search_text: searchText,
        moderate_apply: (!moderateEnable).toString(),
        moderate_check: (!moderateEnable).toString()
      }
    }).subscribe(el => {
      this.articles.next(el);
    });
  }

  public clearArticles(): void {
    this.articles.next([]);
  }
}
