import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-section-large-viewports',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill-section-large-viewports.component.html',
  styleUrl: './skill-section-large-viewports.component.scss'
})
export class SkillSectionLargeViewportsComponent {
  
  hover: boolean = false;
  isTouched: boolean = false;

  icons: string[] = ['html.svg', 'css.svg', 'javascript.svg', 'typescript.svg', 'angular.svg', 'firebase.svg',
    'git.svg', 'restapi.svg', 'scrum.svg', 'material.svg', 'continue-learning.svg'];

  skillIcons(array: string[], index: number) {
    const lastElement = index === array.length - 1;
    return { 'skill-icons-not-moving': lastElement, 'skill-icons-moving': !lastElement }
  }

  startTouch() {
    this.isTouched = true;
  }

  endOfTouch() {
    this.isTouched = false;
  }

  handleTouchStart(event: TouchEvent, index: number): void {
    if (index === this.icons.length - 1) {
      this.startTouch();
      event.preventDefault();
    }
    return;
  }
}