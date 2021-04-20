import { Component, OnInit } from '@angular/core';
import {ArticleHttpService} from '../../../../main-page/infrastucture/article-http.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../../../types/article';

@Component({
  selector: 'app-articles-to-edit',
  templateUrl: './articles-to-edit.component.html',
  styleUrls: ['./articles-to-edit.component.scss']
})
export class ArticlesToEditComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private readonly articleHttpService: ArticleHttpService,
    private readonly route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.articleHttpService.getArticlesByCreater(this.route.snapshot.params.id, true, true, false)
      .subscribe(res => {
        this.articles = res;
      });
  }

}
