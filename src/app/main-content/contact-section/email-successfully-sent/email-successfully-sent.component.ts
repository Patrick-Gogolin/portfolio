import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-email-successfully-sent',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './email-successfully-sent.component.html',
  styleUrl: './email-successfully-sent.component.scss'
})
export class EmailSuccessfullySentComponent {

}
