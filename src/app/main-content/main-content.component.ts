import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeSectionComponent, SkillSectionComponent, PortfolioSectionComponent,TestimonialSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
