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
    'git.svg', 'restapi.svg', 'scrum.svg', 'material.svg', 'purple-continue-learning.svg'];

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
    const target = event.target as HTMLImageElement;
    const lastIcon = 'continue-learning.svg';
    console.log(target.src);
    console.log(lastIcon);
  
    if (target instanceof HTMLImageElement) {
      if (target.src.includes(lastIcon)) {
        event.preventDefault();
        console.log('Touch event started, context menu is disabled for the last element');
      }
    }
    else {
      console.log("nicht erkannt")
    }
  }
}
