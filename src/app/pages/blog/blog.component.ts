import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../type/type';

@Component({
  selector: 'app-article',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  articleList: Article[] = []

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<any[]>('assets/article.json').subscribe(data => {
      this.articleList = data;
    });
  }

  goToArticle(id: string) {
    this.router.navigate(['/blogArticle', id]);
  }

}
