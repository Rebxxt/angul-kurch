import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SearchService} from '../../infrastructure/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public formSearch: FormGroup = new FormGroup({
    searchText: new FormControl(''),
    moderateEnable: new FormControl(false)
  });

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  public search(): void {
    this.searchService.searchArticles(this.formSearch.get('searchText').value, this.formSearch.get('moderateEnable').value);
  }
}
