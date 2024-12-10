import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {
  @Input() currentProjects: [] = [];
  @Input() projectName:string = '';
  @Input() projectSkills: [] = [];
  @Input() projectImage:string = '';
  @Input() projectDescription:string = '';
  @Input() projectLink:string = '';
  @Input() githubLink:string = '';

  isActive: boolean = false;

  // Überprüfen, ob es sich um ein Touch-Gerät handelt
  isTouchDevice: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // Verbesserte Touch-Geräte-Erkennung
    this.isTouchDevice = !!(
      ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
      !window.matchMedia('(hover: hover)').matches
    );
    console.log(this.isTouchDevice);
  }

  @HostListener('click')
  onClick(): void {
    if (this.isTouchDevice) {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    }
  }
}

