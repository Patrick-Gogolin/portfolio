import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProject } from  '../../shared/interfaces/single-project';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, TranslatePipe],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {


  activeProjectIndex: number | null = null;
  buttonActive: boolean = false;

  setActiveProject(index: number): void {
    if (this.activeProjectIndex === index) {
      this.activeProjectIndex = null;
    } else {
      this.activeProjectIndex = index;
    }
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
      projectLink: "https://el-pollo-loco.patrick-gogolin.de/",
      githubLink: "https://github.com/Patrick-Gogolin/Pollo-Loco",
    },
    {
      projectName: 'JOIN',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT', 'FIREBASE'],
      projectImage: './assets/img/mockups/join-mockup.svg',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      projectLink: "https://join.patrick-gogolin.de/",
      githubLink: "https://github.com/Patrick-Gogolin/Join",
    },
    {
      projectName: 'POKEDEX',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectImage: './assets/img/mockups/pokemon-mockup.svg',
      projectDescription: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectLink: "https://pokedex.patrick-gogolin.de/",
      githubLink: "https://github.com/Patrick-Gogolin/Pokedex",
    }
  ]
}