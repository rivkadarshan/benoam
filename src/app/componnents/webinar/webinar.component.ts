// webinar.component.ts
import { Component, OnInit } from '@angular/core';

interface WebinarDetail {
  icon: string;
  label: string;
  value: string;
}

interface Benefit {
  number: number;
  text: string;
}

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {

  webinarDetails: WebinarDetail[] = [
    {
      icon: 'calendar',
      label: 'מתי?',
      value: 'יום שני הקרוב'
    },
    {
      icon: 'clock',
      label: 'שעה',
      value: '21:00'
    },
    {
      icon: 'location',
      label: 'איפה?',
      value: 'בזום או בטלפון'
    }
  ];

  benefits: Benefit[] = [
    { number: 1, text: 'כלים מעשיים ליישום מיידי' },
    { number: 2, text: 'טכניקות תקשורת שעובדות' },
    { number: 3, text: 'הבנה עמוקה של צרכי הזוגיות' },
    { number: 4, text: 'דוגמאות אמיתיות ממקרי הצלחה' },
    { number: 5, text: 'מענה לשאלות באופן אישי' },
    { number: 6, text: 'מדריך מעשי להורדה' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('.detail-item, .benefit-item');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }

  scrollToRegistration(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}