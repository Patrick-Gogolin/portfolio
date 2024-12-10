import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProject } from  '../../shared/interfaces/single-project';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  projects: SingleProject[] = [
    {
      projectName: 'EL POLLO LOCO',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectImage: './assets/img/mockups/pollo-loco-mockup.svg',
      projectDescription: '',
      projectLink: "http://polloloco.patrick-gogolin.de/",
      githubLink: "https://github.com/patrickGogolin/el-pollo-loco",
      key: 'portfolio.epl',
    },
    {
      projectName: 'JOIN',
      projectSkills: ['JAVASCRIPT', 'HTML', 'CSS', 'FIREBASE'],
      projectImage: './assets/img/mockups/join-mockup.svg',
      projectDescription: '',
      projectLink: "http://polloloco.patrick-gogolin.de/",
      githubLink: "https://github.com/patrickGogolin/join",
      key: 'portfolio.join',
    },
    {
      projectName: 'POKEDEX',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectImage: './assets/img/mockups/pokemon-mockup.svg',
      projectDescription: '',
      projectLink: "http://polloloco.patrick-gogolin.de/",
      githubLink: "https://github.com/patrickGogolin/pokedex",
      key: 'portfolio.pokedex',
    }
  ];

}
