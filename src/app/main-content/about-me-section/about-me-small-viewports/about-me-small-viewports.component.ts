import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-small-viewports',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me-small-viewports.component.html',
  styleUrl: './about-me-small-viewports.component.scss'
})
export class AboutMeSmallViewportsComponent {

}
