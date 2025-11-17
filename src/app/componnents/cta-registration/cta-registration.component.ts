// cta-registration.component.ts
import { Component, OnInit } from '@angular/core';

interface RegistrationData {
  name: string;
  phone: string;
  email: string;
  privacyConsent: boolean;
}

@Component({
  selector: 'app-cta-registration',
  templateUrl: './cta-registration.component.html',
  styleUrls: ['./cta-registration.component.css']
})
export class CtaRegistrationComponent implements OnInit {

  formData: RegistrationData = {
    name: '',
    phone: '',
    email: '',
    privacyConsent: false
  };

  isSubmitting = false;
  showSuccess = false;
  availableSeats = 47; // מספר המקומות הנותרים
  recentRegistrations = 23; // מספר הנרשמים ב-24 השעות האחרונות

  constructor() { }

  ngOnInit(): void {
    this.startSeatsCounter();
    this.updateRecentRegistrations();
  }

  onSubmit(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    // כאן תוסיף את הקריאה ל-API או שירות
    // לדוגמה:
    // this.registrationService.register(this.formData).subscribe(...)

    // סימולציה של שליחת טופס
    setTimeout(() => {
      console.log('Registration submitted:', this.formData);
      this.showSuccess = true;
      this.isSubmitting = false;
      
      // עדכון מספר המקומות
      if (this.availableSeats > 0) {
        this.availableSeats--;
      }

      // שליחת אירוע למעקב (Google Analytics, Facebook Pixel, וכו')
      this.trackRegistration();

      // איפוס הטופס אחרי 5 שניות
      setTimeout(() => {
        this.resetForm();
      }, 5000);
    }, 1500);
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      privacyConsent: false
    };
    this.showSuccess = false;
  }

  private startSeatsCounter(): void {
    // סימולציה של ירידה במספר המקומות
    // בפועל, זה יגיע מהשרת
    setInterval(() => {
      if (this.availableSeats > 10 && Math.random() > 0.7) {
        this.availableSeats--;
      }
    }, 60000); // כל דקה
  }

  private updateRecentRegistrations(): void {
    // עדכון מספר הנרשמים האחרונים
    setInterval(() => {
      this.recentRegistrations = Math.floor(Math.random() * 10) + 20; // בין 20 ל-30
    }, 30000); // כל 30 שניות
  }

  private trackRegistration(): void {
    // כאן תוסיף קוד למעקב אחר הרשמות
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'registration', {
        'event_category': 'Webinar',
        'event_label': 'Registration Complete'
      });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'CompleteRegistration');
    }
  }
}

// הגדרות גלובליות עבור tracking
declare let gtag: Function;
declare let fbq: Function;