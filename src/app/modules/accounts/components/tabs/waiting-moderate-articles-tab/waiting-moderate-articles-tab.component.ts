import { Component, OnInit } from '@angular/core';
import {Article} from '../../../../../types/article';
import {ArticleHttpService} from '../../../../main-page/infrastucture/article-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-waiting-moderate-articles-tab',
  templateUrl: './waiting-moderate-articles-tab.component.html',
  styleUrls: ['./waiting-moderate-articles-tab.component.scss']
})
export class WaitingModerateArticlesTabComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private readonly articleHttpService: ArticleHttpService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles(): void {
    this.articleHttpService.getArticlesByCreater(this.route.snapshot.params.id, false, false, false).subscribe(articles => {
      this.articles = articles;
    });
  }
}
