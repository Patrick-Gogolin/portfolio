import { Component } from '@angular/core';
import { SkillSectionSmallViewportsComponent } from './skill-section-small-viewports/skill-section-small-viewports.component';
import { SkillSectionLargeViewportsComponent } from './skill-section-large-viewports/skill-section-large-viewports.component';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [SkillSectionSmallViewportsComponent, SkillSectionLargeViewportsComponent],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})


export class SkillSectionComponent {

}
