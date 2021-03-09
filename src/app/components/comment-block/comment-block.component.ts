import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CommentsService} from './services/comments.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Account} from '../../types/account';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {NotificationService} from '../notification/infrastructure/services/notification.service';
import {ArticleComment} from './types/article-comment';
import {LikedComments} from './types/liked-comments';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.scss']
})
export class CommentBlockComponent implements OnInit {

  @Input('sendBlock') sendBlock: boolean = false;

  public currentArticleId: number;

  public currentAccount: Account;
  public form: FormGroup = new FormGroup({
    text: new FormControl(''),
  });

  constructor(
    public commentsService: CommentsService,
    private readonly accountService: AccountService,
    private readonly route: ActivatedRoute,
    private readonly notificationService: NotificationService,
  ) { }

  public ngOnInit(): void {
    this.accountService.authUser.subscribe(account => {
      this.currentAccount = account;
    });
    this.currentArticleId = this.route.snapshot.params?.id;
    this.updateComments();
    this.getLikedCommentsAuthUser();
  }

  public updateComments(): void {
    this.commentsService.getComments(this.currentArticleId);
  }

  public sendNewComment(): void {
    this.commentsService.sendComment({
      article_id: this.currentArticleId,
      text: this.form.controls.text.value
    }).subscribe({
      next: () => {
        this.form.reset();
      },
      complete: () => {
        this.updateComments();
      }
    });
  }

  public sendSubComment(commentId: number, form): void {
    this.commentsService.sendComment({
      article_id: this.currentArticleId,
      text: form.controls.text.value,
      comment_id: commentId,
    }).subscribe(res => {
      console.log(res);
      this.getLikedCommentsAuthUser();
      this.updateComments();
    });
  }

  public likeComment(commentId: number, like: boolean): void {
    this.commentsService.likeComment({
      comment_id: commentId,
      like,
    }).subscribe({
      next: res => {
        this.updateCommentAfterLike(commentId);
        this.notificationService.notify('Вы успешно оценили комментарий', 'primary');
      },
      error: (err) => {
        this.notificationService.notify(err.error.err, 'warning');
      }
    });
  }

  public getLikedCommentsAuthUser(): void {
    this.commentsService.getLikedComments(this.currentArticleId);
  }

  public updateCommentAfterLike(commentId: number): void {
    this.commentsService.updateCommentAfterLike(commentId);
  }

  public checkLiked(likedComments: LikedComments[], commentId: number): boolean | undefined {
    const ind = likedComments?.findIndex(el => el.id === commentId);
    if (ind !== -1) {
      return likedComments[ind].comment_like;
    }
    return;
  }
}
