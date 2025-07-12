import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  /**
   * 解析 Markdown 為 HTML
   * @param mdText 
   * @returns 
   */
  async  parseMarkdown(mdText: string): Promise<string>{
    return marked.parse(mdText);
  }
}
