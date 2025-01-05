import { Component } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';
import { TranslatePipe } from '@ngx-translate/core';
import { EmailSuccessfullySentComponent } from './email-successfully-sent/email-successfully-sent.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactformComponent, TranslatePipe, EmailSuccessfullySentComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  emailSent = false;

  sendEmail() {
    this.emailSent = true;
    setTimeout(() => {
      this.emailSent = false;
    }, 2000);
  }
  scrollToTop() {
    window.scrollTo(0,0);
  }
}
