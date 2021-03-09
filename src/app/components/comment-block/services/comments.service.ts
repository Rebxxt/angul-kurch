import {Injectable} from '@angular/core';
import {CommentsHttpService} from './comments-http.service';
import {ArticleComment} from '../types/article-comment';
import {ArticleCommentRequest} from '../types/article-comment-request';
import {Observable} from 'rxjs';
import {CommentLikeRequest} from '../types/comment-like-request';

@Injectable()
export class CommentsService {
  public comments: ArticleComment[];

  constructor(
    private readonly commentsHttpService: CommentsHttpService,
  ) {
  }

  public getComments(id: number): void {
    this.commentsHttpService.getComments(id).subscribe(comments => {
      this.comments = comments;
    });
  }

  public sendComment(comment: ArticleCommentRequest): Observable<any> {
    return this.commentsHttpService.sendComment(comment);
  }

  public likeComment(comment: CommentLikeRequest): Observable<any> {
    return this.commentsHttpService.likeComment(comment);
  }
}
