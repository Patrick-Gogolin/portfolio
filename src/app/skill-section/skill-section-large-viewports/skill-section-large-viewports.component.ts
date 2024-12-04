import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-skill-section-large-viewports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-section-large-viewports.component.html',
  styleUrl: './skill-section-large-viewports.component.scss'
})
export class SkillSectionLargeViewportsComponent {
  hover : boolean = false;
  isTouched: boolean = false;

  icons: string[] = ['html.svg', 'css.svg', 'javascript.svg', 'typescript.svg', 'angular.svg', 'firebase.svg',
    'git.svg', 'restapi.svg', 'scrum.svg', 'material.svg', 'continue-learning.svg'];

  skillIcons(array: string[], index: number) {
    const lastElement = index === array.length - 1;
    return {'skill-icons-not-moving': lastElement, 'skill-icons-moving': !lastElement}
  }

  startTouch() {
    this.isTouched = true;
    console.log(this.isTouched);
    console.log("hover", this.hover);
  }

  endOfTouch() {
    this.isTouched = false;
    console.log(this.isTouched);
    console.log("hover", this.hover);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    const target = event.target as HTMLImageElement;
    const lastIcon = this.icons[this.icons.length - 1];
    console.log(target.src);
    console.log(lastIcon);
  
    if (target instanceof HTMLImageElement) {
      if (target.src.includes(lastIcon)) {
        event.preventDefault();
        console.log('Touch event started, context menu is disabled for the last element');
      }
    }
  }
}

