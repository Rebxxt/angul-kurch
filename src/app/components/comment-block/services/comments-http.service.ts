import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ArticleCommentRequest} from '../types/article-comment-request';
import {CommentLikeRequest} from '../types/comment-like-request';

@Injectable()
export class CommentsHttpService {
  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getComments(id: number): Observable<any> {
    const params = new HttpParams().append('article_id', id.toString());
    return this.http.get(environment.URLs.comments, { params });
  }

  public sendComment(body: ArticleCommentRequest): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('article_id', body.article_id.toString())
      .append('text', body.text);
    return this.http.post(environment.URLs.comments, params);
  }

  public likeComment(body: CommentLikeRequest): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('comment_id', body.comment_id.toString())
      .append('like', body.like.toString());
    return this.http.post(environment.URLs.commentsLike, params);
  }
}
