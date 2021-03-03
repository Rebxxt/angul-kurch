import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../types/article';
import {AccountService} from '../../../../infrastructure/services/account.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input('articles') articles: Article[];

  constructor(
    public accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

  public deleteArticle(id): void {
    console.log('delete', id)
  }
}
