import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from '../../types/article';
import {SearchService} from '../../infrastructure/services/search.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements OnInit, OnDestroy {

  articles: Article[] = [];

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.articles.subscribe(el => {
      this.articles = el;
    });
  }

  public getEndOfWord(array: any): string {
    const count = array?.length;
    if (count % 10 === 0 || (count % 100 <= 20 && count % 100 >= 5)) {
      return 'ей';
    }
    if (count % 10 === 1) {
      return 'ья';
    }
    if (count % 10 > 1 && count % 10 < 5) {
      return 'ьи';
    }

    // 0 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 26 ей
    // 1 21 31 101 91 ья
    // 2 3 4 22 23 24 ьи
  }

  ngOnDestroy(): void {
    this.searchService.clearArticles();
  }
}
