import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TimeLineComponent {
  @Input() experiences: {
    year: string;
    company: string;
    title: string;
    description: string;
  }[] = [];

  constructor(){}

  ngOnInit() {
    console.log('experiences:',this.experiences)
  }
}
