import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CommentsService} from './services/comments.service';
import {AccountService} from '../../infrastructure/services/account.service';
import {Account} from '../../types/account';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.scss']
})
export class CommentBlockComponent implements OnInit {

  @Input('sendBlock') sendBlock: boolean = false;

  public currentArticleId;

  public currentAccount: Account;
  public form: FormGroup = new FormGroup({
    text: new FormControl(''),
  });

  constructor(
    public commentsService: CommentsService,
    private readonly accountService: AccountService,
    private readonly route: ActivatedRoute,
    private readonly el: ElementRef,
  ) { }

  public ngOnInit(): void {
    this.accountService.authUser.subscribe(account => {
      this.currentAccount = account;
    });
    const fragment = this.route.snapshot.fragment;
    if (fragment !== '') {
      console.log(fragment)
      const com = document.getElementById(fragment);
      console.log(com)
      // this.(['#' + fragment]);
    }
    this.currentArticleId = this.route.snapshot.params?.id;
    this.updateComments();
  }

  public updateComments(): void {
    this.commentsService.getComments(this.currentArticleId);
  }

  public sendNewComment(): void {
    this.commentsService.sendComment({
      article_id: this.currentArticleId,
      text: this.form.controls.text.value
    }).subscribe({
      complete: () => {
        this.updateComments();
      }
    });
  }

  public sendSubComment(commentId: number): void {
    this.commentsService.sendComment({
      article_id: this.currentArticleId,
      text: this.form.controls.text.value,
      comment_id: commentId,
    }).subscribe(res => {
      console.log(res);
      this.updateComments();
    });
  }
}