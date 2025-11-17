// contact-form.component.ts
import { Component } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
  privacyConsent: boolean;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    marketingConsent: false,
    privacyConsent: false
  };

  isSubmitting = false;
  showSuccess = false;

  constructor() { }

  onSubmit(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    // כאן תוסיף את הקריאה ל-API או שירות שישלח את הטופס
    // לדוגמה:
    // this.contactService.submitForm(this.formData).subscribe(...)

    // סימולציה של שליחת טופס
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.showSuccess = true;
      this.isSubmitting = false;
      
      // איפוס הטופס אחרי 3 שניות
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }, 1500);
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      marketingConsent: false,
      privacyConsent: false
    };
    this.showSuccess = false;
  }
}