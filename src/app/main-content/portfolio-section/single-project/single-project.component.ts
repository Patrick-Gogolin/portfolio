import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProject } from '../../../shared/interfaces/single-project';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {


  @Input() project: SingleProject | null = null;
  @Input() isActive: boolean = false;

  @Output() activate = new EventEmitter<void>();

  buttonActive = false;

  constructor() {
  }


  onMouseOver(): void {
    setTimeout(() => {
      this.buttonActive = !this.buttonActive;
      console.log(this.buttonActive);
    }, 100);
  }

  onMouseOut(): void {
    setTimeout(() => {
      this.buttonActive = !this.buttonActive;
    }, 100);
  }

  openProjectOverview() {
    this.activate.emit();
    setTimeout(() => {
      this.buttonActive = !this.buttonActive;
    }, 100);
  }
}