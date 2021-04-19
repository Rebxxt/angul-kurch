import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ArticleService} from './infrastructure/article.service';
import {Article} from '../../types/article';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../infrastructure/services/account.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  public currentArticle: Article;
  public load: boolean = false;

  public form: FormGroup = new FormGroup({
    author_id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
  });

  private _editMode = false;
  public set editMode(value) {
    this.form.get('title').setValue(this.currentArticle.title);
    this.form.get('content').setValue(this.currentArticle.content);
    this._editMode = value;
  }
  public get editMode(): boolean {
    return this._editMode;
  }

  constructor(
    private readonly location: Location,
    private readonly articleService: ArticleService,
    private readonly activatedRoute: ActivatedRoute,
    public accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.articleService.getArticle(this.activatedRoute.snapshot.params.id).subscribe(article => {
      if (article != undefined) {
        this.currentArticle = article[0];
        this.form.get('title').setValue(this.currentArticle.title);
        this.form.get('content').setValue(this.currentArticle.content);
      }
    }, err => {}, () => {
      this.load = true;
    });
  }

  public ngAfterViewInit(): void {
  }

  public backRoute(): void {
    this.location.back();
  }

  public onSubmit(): void {
    console.log(this.form.value)
  }
}
