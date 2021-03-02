import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../types/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input('articles') articles: Article[];

  constructor() { }

  ngOnInit(): void {
    console.log('init', this.articles)
  }

}
