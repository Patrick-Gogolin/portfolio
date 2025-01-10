import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-section-small-viewports',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill-section-small-viewports.component.html',
  styleUrl: './skill-section-small-viewports.component.scss'
})
export class SkillSectionSmallViewportsComponent {
  isTouched: boolean = false;

  icons: string[] = ['html.svg', 'css.svg', 'javascript.svg', 'typescript.svg', 'angular.svg', 'firebase.svg',
    'git.svg', 'restapi.svg', 'scrum.svg', 'material.svg', 'purple-continue-learning.svg'];

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