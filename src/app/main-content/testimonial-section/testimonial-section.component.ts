import { Component } from '@angular/core';
import { Testimonial } from '../../shared/interfaces/testimonial';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {

  currentTestimonial: number = 0;

  testimonials: Testimonial[] = [
    {
     img: "../../../assets/img/testimonials/testimonial_one.png",
     firstCharacterOfFirstName: "V.",
     lastName: "Schuster",
     role: "Team Partner",
     testimonial: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment"
    },
    {
      img: "../../../assets/img/testimonials/testimonial_one.png",
      firstCharacterOfFirstName: "M.",
      lastName: "Maus",
      role: "Team Partner",
      testimonial: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals."
     },
     {
      img: "../../../assets/img/testimonials/testimonial_one.png",
      firstCharacterOfFirstName: "G.",
      lastName: "Gans",
      role: "Team Partner",
      testimonial: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well."
     },
  ]

  nextTestimonial() {
    if(this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial ++;
    }
  }

  previousTestimonial() {
    if(this.currentTestimonial !== 0) {
      this.currentTestimonial --;
    }
  }
}
