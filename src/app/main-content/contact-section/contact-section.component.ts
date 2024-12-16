import { Component } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactformComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

}
