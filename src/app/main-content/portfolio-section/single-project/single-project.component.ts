import { Component, Input, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProject } from '../../../shared/interfaces/single-project';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {

  @Input() project: SingleProject | null = null;
  @Input() isActive: boolean = false;

  @Output() activate = new EventEmitter<void>();

  isTouchDevice: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.isTouchDevice = !!(
      ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
      !window.matchMedia('(hover: hover)').matches
    );
    console.log(this.isTouchDevice);
  }

  @HostListener('click')
  onClick(): void {
    if (this.isTouchDevice) {
      this.activate.emit();
    }
  }
}