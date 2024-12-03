import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-skill-section-small-viewports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-section-small-viewports.component.html',
  styleUrl: './skill-section-small-viewports.component.scss'
})
export class SkillSectionSmallViewportsComponent {
  isTouched: boolean = false;

  icons: string[] = ['html.svg', 'css.svg', 'javascript.svg', 'typescript.svg', 'angular.svg', 'firebase.svg',
    'git.svg', 'restapi.svg', 'scrum.svg', 'material.svg', 'continue-learning-purple.svg'];

    handleTouchStart(event: TouchEvent): void {
      console.log('Touch started on target image:', event.target);
  }

  startTouch() {
    this.isTouched = true;
    console.log(this.isTouched);
  }

  endOfTouch() {
    this.isTouched = false;
    console.log(this.isTouched);
  }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent): void {
      event.preventDefault();
      console.log('Touch event started, context menu is disabled');
    }

}
