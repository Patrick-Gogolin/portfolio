import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  }
  
  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.contactData)
      ngForm.resetForm();
    }
  }

  returnBorder(field: NgModel): string {
    if (!field.valid && field.touched) {
      return 'invalid-border';
    } else if (field.valid && field.touched) {
      return 'valid-border';
    }
    return '';
  }
}
