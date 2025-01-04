import { Component } from '@angular/core';
import { Testimonial } from '../../shared/interfaces/testimonial';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {

  currentTestimonial: number = 0;

  testimonials: Testimonial[] = [
    {
      img: "./assets/img/testimonials/patrick-kanert.jpg",
      firstCharacterOfFirstName: "P.",
      lastName: "Kanert",
      role: "Team Partner",
      testimonial: "testimonial-one"
    },
    {
      img: "./assets/img/testimonials/sandor-balaszi.jpg",
      firstCharacterOfFirstName: "S.",
      lastName: "Balaszi",
      role: "Team Partner",
      testimonial: "testimonial-two"
    },
  ]

  nextTestimonial() {
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    }
  }

  previousTestimonial() {
    if (this.currentTestimonial !== 0) {
      this.currentTestimonial--;
    }
  }
}