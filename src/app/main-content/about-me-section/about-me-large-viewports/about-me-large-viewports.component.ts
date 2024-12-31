import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-about-me-large-viewports',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me-large-viewports.component.html',
  styleUrl: './about-me-large-viewports.component.scss'
})
export class AboutMeLargeViewportsComponent {
}
