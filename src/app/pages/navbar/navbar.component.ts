import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;

  nowPage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      console.log('目前頁面 URL:', event.urlAfterRedirects);
      this.nowPage = event.urlAfterRedirects;
    });
  }
  // 切換選單顯示與隱藏
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(toPageName: string) {
    this.router.navigate(['/' + toPageName]);
    this.menuOpen = false; // 點擊後關閉選單
  }
}
