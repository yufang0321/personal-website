import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class BuildingComponent {

  constructor(
    private router: Router
  ) {}

  goHome() {
    this.router.navigate(['/home'])
  }
}
