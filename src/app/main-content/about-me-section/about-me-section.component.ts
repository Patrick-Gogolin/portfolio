import { Component } from '@angular/core';
import { AboutMeLargeViewportsComponent } from './about-me-large-viewports/about-me-large-viewports.component';
import { AboutMeSmallViewportsComponent } from "./about-me-small-viewports/about-me-small-viewports.component";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [AboutMeLargeViewportsComponent, AboutMeSmallViewportsComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

}
