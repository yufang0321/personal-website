import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillComponent {
  @Input() skillGroups: {
    title: string;
    skills: { name: string; level: number }[];
  }[] = [];

  constructor() {}

  ngOnInit() {
    console.log('skills:',this.skillGroups)
  }
}
