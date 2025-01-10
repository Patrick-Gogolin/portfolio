import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http'; // Importiere HttpClient

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, TranslatePipe],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  constructor(private http: HttpClient) {}
  @Output() emailSent =  new EventEmitter();

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  }

  mailTest = false;

  post = {
    endPoint: 'https://patrick-gogolin.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendEmail();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

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

  sendEmail() {
    this.emailSent.emit();
  }
}