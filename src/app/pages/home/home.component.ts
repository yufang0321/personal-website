import { Component } from '@angular/core';
import { TimeLineComponent } from '../../components/time-line/time-line.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  myExperiences = [
    {
      year: '2021.3 - 2021.12(9M)',
      company: '資宸科技有限公司',
      title: '工程師',
      description: '寺廟系統及補習班打卡系統開發，使用React.js前端框架及node.js。'
    },
    {
      year: '2022.1 - 2023.9(1Y9M)',
      company: '中華系統整合股份有限公司',
      title: '工程師',
      description: '政府網站系統更新，使用Spring Boot後端框架、Vue.js前端框架。'
    },
    {
      year: '2024.1 - 現在(1Y7M)',
      company: '傑報人力資源服務集團',
      title: '前端工程師',
      description: '人力系統、派遣系統開發，專注於 Angular 專案開發、元件設計。'
    }
  ];

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
