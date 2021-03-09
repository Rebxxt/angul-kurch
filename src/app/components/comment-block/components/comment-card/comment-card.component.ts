import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ArticleComment} from '../../types/article-comment';
import {Account} from '../../../../types/account';
import {CommentsService} from '../../services/comments.service';
import {NotificationService} from '../../../notification/infrastructure/services/notification.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    text: new FormControl(''),
  })

  @Input('comment') public comment: ArticleComment;
  @Input('currentAccount') public currentAccount: Account;
  @Input('currentArticleId') public currentArticleId: number;
  @Input('likeComment') public likeComment;
  @Input('checkLiked') public checkLiked;
  @Input('likedComments') public likedComments;
  @Input('updateCommentAfterLike') public updateCommentAfterLike;
  @Input('sendSubComment') public sendSubComment;

  constructor(
    public commentsService: CommentsService,
    private readonly notificationService: NotificationService,
    ) { }

  ngOnInit(): void {
  }

  public sendNewSubComment(): void {
    this.sendSubComment();
  }
}
