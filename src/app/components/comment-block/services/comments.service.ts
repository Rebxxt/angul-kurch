import {Injectable} from '@angular/core';
import {CommentsHttpService} from './comments-http.service';
import {ArticleComment, SubCommentTree} from '../types/article-comment';
import {ArticleCommentRequest} from '../types/article-comment-request';
import {Observable} from 'rxjs';
import {CommentLikeRequest} from '../types/comment-like-request';
import {LikedComments} from '../types/liked-comments';

@Injectable()
export class CommentsService {
  public comments: ArticleComment[];
  public tree: SubCommentTree[];
  public likedComments: LikedComments[];

  constructor(
    private readonly commentsHttpService: CommentsHttpService,
  ) {
  }

  public getComments(id: number): void {
    this.commentsHttpService.getComments(id).subscribe(comments => {
      this.comments = comments;
      this.buildTree();
    });
  }

  public sendComment(comment: ArticleCommentRequest): Observable<any> {
    return this.commentsHttpService.sendComment(comment);
  }

  public likeComment(comment: CommentLikeRequest): Observable<any> {
    return this.commentsHttpService.likeComment(comment);
  }

  public updateCommentAfterLike(commentId: number): void {
    this.commentsHttpService.getComment(commentId).subscribe(result => {
      const currentComment = this.comments.findIndex(el => el.id === result[0].id);
      this.comments[currentComment] = result[0];
    });
  }

  public getLikedComments(currentArticleId: number): void {
    this.commentsHttpService.getLikedComments(currentArticleId).subscribe(res => {
      this.likedComments = res;
    });
  }

  private buildTree(): void {
    this.tree = [];
    this.comments.map((el, ind) => {
      if (!el.comment_id) {
        this.tree.push(el);
      } else {
        this.tree[ind].subComments.push(
          ...this.comments.filter(com => com.comment_id === el.id),
        );
      }
    });
    console.log(this.tree)
  }
}
