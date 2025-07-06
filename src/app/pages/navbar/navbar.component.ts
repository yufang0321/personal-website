import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {}
  // 切換選單顯示與隱藏
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(toPageName: string) {
    this.router.navigate(['/' + toPageName]);
    this.menuOpen = false; // 點擊後關閉選單
  }
}
