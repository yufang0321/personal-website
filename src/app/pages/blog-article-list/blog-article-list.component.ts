import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from '../../services/markdown.service';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { catchError, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-blog-article-list',
  templateUrl: './blog-article-list.component.html',
  styleUrl: './blog-article-list.component.scss'
})
export class BlogArticleListComponent {

  content: string = '';  // 儲存轉換後的 HTML 內容

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute
    ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get(`assets/blogs/${id}.md`, { responseType: 'text' }).pipe(
        switchMap(md => 
          from(Promise.resolve(marked.parse(md)))
        ), 
        catchError(err => {
          console.error('載入文章失敗', err);
          return of('<p style="color:red;">⚠️ 無法載入文章內容</p>');
        })
      ).subscribe(html => {
        this.content = html;
      });
    }
  }

}
