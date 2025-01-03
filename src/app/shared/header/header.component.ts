import { Component, inject, OnInit } from '@angular/core';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerMenuComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private translate = inject(TranslateService);
  currentLanguage: string = 'en';
  burgerMenuOpen: boolean = false;
  initialized: boolean = false;
  imageInterval: ReturnType<typeof setInterval> | null = null;
  currentImageIndex: number = 0;

  images: string[] = ['./assets/img/burger-menu/burger-menu.svg', './assets/img/burger-menu/burger-menu-step-two.svg', './assets/img/burger-menu/close-burger-menu-step-one.svg', './assets/img/burger-menu/close-burger-menu-step-two.svg'];

  ngOnInit() {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.switchLanguage(this.currentLanguage);
  }

  toggleBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
    this.initialized = true;
    document.body.style.overflow = this.burgerMenuOpen ? 'hidden' : 'auto';
    this.changeBurgerMenuIcon();
  }

  burgerMenuIconOpenAnimation() {
    this.imageInterval = setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length - 1) {
        clearInterval(this.imageInterval!);
      }
    }, 65);
  }

   burgerMenuIconCloseAnimation() {
    this.imageInterval = setInterval(() => {
      this.currentImageIndex--;
      if (this.currentImageIndex === 0) {
        clearInterval(this.imageInterval!);
      }
    }, 65);
  }

  changeBurgerMenuIcon() {
    if(this.currentImageIndex === 0) {
      this.burgerMenuIconOpenAnimation();
    }
    else {
      this.burgerMenuIconCloseAnimation();
    }
  }

  animateSlider(){
    if (this.currentLanguage === "en") {
      return 'animate-to-right'
    }
    if (this.currentLanguage === 'de') {
      return 'animate-to-left'
    }
    return 'animate-to-right';
  }
}