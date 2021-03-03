import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ArticleService} from './infrastructure/article.service';
import {Article} from '../../types/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public currentArticle: Article;

  constructor(
    private readonly location: Location,
    private readonly articleService: ArticleService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.articleService.getArticle(this.activatedRoute.snapshot.params.id).subscribe(article => {
      this.currentArticle = article;
    })
  }

  public backRoute(): void {
    this.location.back();
  }
}
