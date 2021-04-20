import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../../environments/environment';

@Component({
  selector: 'app-likes-articles-tab',
  templateUrl: './likes-articles-tab.component.html',
  styleUrls: ['./likes-articles-tab.component.scss']
})
export class LikesArticlesTabComponent implements OnInit {

  constructor(
    private readonly http: HttpClient,
  ) { }

  ngOnInit(): void {
    const params = new HttpParams().append('id', 'id.toString()')
    this.http.get(environment.URLs.articles, { params })
  }

}
