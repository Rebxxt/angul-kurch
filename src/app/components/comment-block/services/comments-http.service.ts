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

  public getComments(articleId: number): Observable<any> {
    const params = new HttpParams().append('article_id', articleId.toString());
    return this.http.get(environment.URLs.comments, { params });
  }

  public getComment(commentId: number): Observable<any> {
    return this.http.get(`${environment.URLs.comments}/${commentId}`);
  }

  public sendComment(body: ArticleCommentRequest): Observable<any> {
    let params: HttpParams = new HttpParams()
      .append('article_id', body.article_id.toString())
      .append('text', body.text);
    if (body.comment_id) {
      params = params.append('comment_id', body.comment_id.toString());
    }
    return this.http.post(environment.URLs.comments, params);
  }

  public likeComment(body: CommentLikeRequest): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('comment_id', body.comment_id.toString())
      .append('like', body.like.toString());
    return this.http.post(environment.URLs.commentsLike, params);
  }

  public getLikedComments(currentArticleId: number): Observable<any> {
    return this.http.get(`${environment.URLs.commentsUserArticle}/${currentArticleId}`);
  }
}
