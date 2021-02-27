import { Component, OnInit } from '@angular/core';
import {ArticleHttpService} from './infrastucture/article-http.service';
import {Article} from '../../types/article';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public articles: Article[] = [];

  constructor(
    private readonly articleHttp: ArticleHttpService,
  ) { }

  ngOnInit(): void {
    this.initArticles();
  }

  public getArticles(): void {
    this.articleHttp.getArticles().subscribe(result => {
      this.articles = result;
      console.log('GET RESULT', this.articles);
    });
  }

  public addArticle(): void {
    const body = { title: 'tet', content: 'test', author_id: 0 };
    this.articleHttp.addArticle(body).subscribe(result => {
      console.log('POST RESULT', result);
    });
  }

  public deleteArticle(): void {
    const body = { id: 0 };
    this.articleHttp.deleteArticle(body).subscribe(result => {
      console.log('DELETE RESULT', result);
    });
  }

  private initArticles(): void {
    this.getArticles();
  }

  public likeArticle(authorId: number): void {
    this.articleHttp.likeArticle({ authorId, count: 1 }).subscribe(result => {
      console.log('result like', result);
    });
  }

  public dislikeArticle(authorId: number): void {
    this.articleHttp.likeArticle({ authorId, count: -1 }).subscribe(result => {
      console.log('result dislike', result);
    });
  }
}
