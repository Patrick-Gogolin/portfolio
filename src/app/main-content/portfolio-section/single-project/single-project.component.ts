import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProject } from '../../../shared/interfaces/single-project';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  private isScrolling = false;
  private touchStartY = 0;

  @Input() project: SingleProject | null = null;
  @Input() isActive: boolean = false;
  @Input() buttonActivated: boolean = false;

  @Output() activate = new EventEmitter<void>();

  constructor() {
  }

  onTouchStart(event: TouchEvent) {
    this.isScrolling = false;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchMove(event: TouchEvent) {
    const touchMoveY = event.touches[0].clientY;
    if (Math.abs(touchMoveY - this.touchStartY) > 10) {
      this.isScrolling = true;
    }
  }

  onTouchEnd() {
    if (this.isScrolling) {
      return;
    }
    this.openProjectOverview();
  }

  openProjectOverview() {
    this.activate.emit();
  }

  getProjectDescriptionKey(projectName: string | undefined): string {
    return `portfolio.projects.${projectName ?? 'default'}.description`;
  }
}