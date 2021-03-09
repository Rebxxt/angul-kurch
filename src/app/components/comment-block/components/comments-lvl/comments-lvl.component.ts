import {Component, Input, OnInit} from '@angular/core';
import {ArticleComment, SubCommentTree} from '../../types/article-comment';
import {Account} from '../../../../types/account';
import {LikedComments} from '../../types/liked-comments';
import {CommentsService} from '../../services/comments.service';
import {NotificationService} from '../../../notification/infrastructure/services/notification.service';

@Component({
  selector: 'app-comments-lvl',
  templateUrl: './comments-lvl.component.html',
  styleUrls: ['./comments-lvl.component.scss']
})
export class CommentsLvlComponent implements OnInit {

  public showInput: boolean = false;

  @Input('currentAccount') currentAccount: Account;
  @Input('currentAccountId') currentArticleId: number;
  @Input('comments') comments: SubCommentTree[];
  @Input('likedComments') likedComments: LikedComments[];
  @Input('likeComment') likeComment;
  @Input('checkLiked') checkLiked;
  @Input('currentLvl') currentLvl: number;
  @Input('updateCommentAfterLike') updateCommentAfterLike;
  @Input('sendSubComment') sendSubComment;

  constructor(
    public commentsService: CommentsService,
    private readonly notificationService: NotificationService,

  ) { }

  public ngOnInit(): void {
  }
}
