import {Injectable} from '@angular/core';
import {ArticleCreaterHttpService} from './article-creater-http.service';
import {ArticleRequest} from '../types/article-request';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ArticleCreaterService {
  constructor(
    private readonly articleCreaterHttp: ArticleCreaterHttpService,
    private readonly router: Router,
  ) {
  }

  public sendArticle(articleRequest: ArticleRequest): void {
    const converter = {}
    Object.keys(articleRequest).forEach(el => {
      converter[el] = articleRequest[el];
    });
    const params = new HttpParams().appendAll(converter).append('content', articleRequest.content);
    this.articleCreaterHttp.sendArticle(params).subscribe(response => {
      console.log('response', response);
      this.router.navigate(['/']);
      // TODO сделать навигация в мой профиль в таб своих статей
    });
  }
}
