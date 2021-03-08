import { Component, OnInit } from '@angular/core';
import {ArticleHttpService} from '../../../../main-page/infrastucture/article-http.service';
import {Article} from '../../../../../types/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-publication-articles-tab',
  templateUrl: './publication-articles-tab.component.html',
  styleUrls: ['./publication-articles-tab.component.scss']
})
export class PublicationArticlesTabComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private readonly articleHttpService: ArticleHttpService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles(): void {
    this.articleHttpService.getArticlesByCreater(this.route.snapshot.params.id).subscribe(articles => {
      this.articles = articles;
    });
  }
}
