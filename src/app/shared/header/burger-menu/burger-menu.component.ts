import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
   @Input() isActive: boolean = false;
   @Input() initialized: boolean = false;
}