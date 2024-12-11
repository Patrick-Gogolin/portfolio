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

  activeProjectIndex: number | null = null;

  setActiveProject(index: number): void {
    if (this.activeProjectIndex === index) {
      this.activeProjectIndex = null;
    } else {
      this.activeProjectIndex = index;
    }
    console.log(this.activeProjectIndex);
  }
  
  isActive(index:number): boolean {
    return this.activeProjectIndex === index;
  }

  projects: SingleProject[] = [
    {
      projectName: 'EL POLLO LOCO',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectImage: './assets/img/mockups/pollo-loco-mockup.svg',
      projectDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      projectLink: "http://polloloco.patrick-gogolin.de/",
      githubLink: "https://github.com/patrickGogolin/el-pollo-loco",
    },
    {
      projectName: 'JOIN',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT', 'FIREBASE'],
      projectImage: './assets/img/mockups/join-mockup.svg',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      projectLink: "http://polloloco.patrick-gogolin.de/",
      githubLink: "https://github.com/patrickGogolin/join",
    },
    {
      projectName: 'POKEDEX',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectImage: './assets/img/mockups/pokemon-mockup.svg',
      projectDescription: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectLink: "http://polloloco.patrick-gogolin.de/",
      githubLink: "https://github.com/patrickGogolin/pokedex",
    }
  ]
}
