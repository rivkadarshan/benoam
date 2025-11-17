// solution.component.ts
import { Component, OnInit } from '@angular/core';

interface Benefit {
  text: string;
}

interface Testimonial {
  text: string;
  authorName: string;
  authorRole: string;
  avatar: string;
  featured?: boolean;
}

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  benefits: Benefit[] = [
    {
      text: 'איך להבעיר את האהבה בבית כדי למנוע את כל הוויכוחים הטורדניים'
    },
    {
      text: 'איך לגרום לה להרגיש מוערכת – גם בלי "לקנות לה כל הזמן משהו"'
    },
    {
      text: 'איך לבנות אהבה הדדית – בלי לוותר על העמדה שלך כגבר'
    },
    {
      text: 'מהי הדרך הנכונה לשמר ולפתח אהבה קיימת'
    }
  ];

  testimonials: Testimonial[] = [
    {
      text: 'נועם, פתאום התחלתי להרגיש שבאמת אני אוהב את אשתי ולא יכול לוותר עליה.',
      authorName: 'משתתף בוובינר',
      authorRole: 'אב למשפחה',
      avatar: '👨‍💼'
    },
    {
      text: 'אני יוצא עם אשתי לצימר כל שנה וזה לא מקדם כלום בזוגיות שלנו, וכששמעתי את השיעורים שלך בלי שום השקעה כספית אשתי אומרת לי "מה עובר עליך, איך אתה כ"כ מבין אותי".',
      authorName: 'משתתף בתכנית',
      authorRole: 'מעיד על שינוי אמיתי',
      avatar: '👨'
    },
    {
      text: 'נועם, בעלי השבוע היה 100% עזר לי הרבה עם הילדים, דיבר אלי יפה ובכיף, כל הזמן התחשב בי אם אני עייפה וצריכה עזרה, והכל בשמחה בלי שום תלונה.',
      authorName: 'אישה מהקהילה',
      authorRole: 'מתקשרת בהתרגשות',
      avatar: '👩',
      featured: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.15,
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
      const elements = document.querySelectorAll('.benefit-card, .testimonial-card');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}