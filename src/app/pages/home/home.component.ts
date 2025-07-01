import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() {

  }

  /**
   * 導航至該指定標題位置
   * @param targetId 
   */
  scrollTo(targetId: string): void {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
