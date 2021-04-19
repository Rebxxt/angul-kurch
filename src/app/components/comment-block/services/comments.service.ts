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
      this.tree = this.buildTree(null, this.comments);
      console.log('after build', this.tree)
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

  private buildTree(id: number, arr: ArticleComment[]): SubCommentTree[] {
    const nextlvl: SubCommentTree[] = [];
    arr.forEach(element => {
      if (element.comment_id === id) {
        const newTree: SubCommentTree = {...element,
          subComments: this.buildTree(element.id, arr),
          subCommentsCount: 0
        };

        let subCount = 0;
        newTree.subComments.forEach(com => {
          subCount += com.subCommentsCount;
        });
        newTree.subCommentsCount = subCount + newTree.subComments.length;

        nextlvl.push(newTree);
      }
    });
    return nextlvl;
  }
}
