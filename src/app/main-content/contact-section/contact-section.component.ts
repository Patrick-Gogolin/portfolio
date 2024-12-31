import { Component } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactformComponent, TranslatePipe],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  scrollToTop() {
    window.scrollTo(0,0);
  }
}
