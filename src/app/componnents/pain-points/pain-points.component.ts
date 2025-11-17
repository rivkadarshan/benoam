// pain-points.component.ts
import { Component, OnInit } from '@angular/core';

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-pain-points',
  templateUrl: './pain-points.component.html',
  styleUrls: ['./pain-points.component.css']
})
export class PainPointsComponent implements OnInit {
  
  // אפשר להוסיף כאן לוגיקה נוספת אם צריך
  // למשל, טעינת ה-pain points מ-API או שירות

  painPoints: PainPoint[] = [
    {
      icon: 'layers',
      title: 'תהליכים בירוקרטיים מורכבים',
      description: 'הליכי הבישואין כוללים טפסים רבים, מסמכים ודרישות שקשה להתמצא בהם לבד'
    },
    {
      icon: 'clock',
      title: 'חוסר וודאות לגבי זמנים',
      description: 'לא ברור כמה זמן ייקח התהליך ומתי בדיוק תוכלו להתחתן'
    },
    {
      icon: 'document',
      title: 'מסמכים חסרים או שגויים',
      description: 'פעמים רבות מגלים באיחור שחסרים מסמכים או שיש טעויות שגורמות לעיכובים'
    },
    {
      icon: 'alert',
      title: 'חוסר מידע וליווי',
      description: 'קשה למצוא מקור מידע אמין ואדם שיוכל ללוות אתכם לאורך כל התהליך'
    },
    {
      icon: 'message',
      title: 'קושי בתקשורת עם הרבנות',
      description: 'התקשורת עם הרבנות יכולה להיות מסובכת ולא תמיד ברורה'
    },
    {
      icon: 'check',
      title: 'חשש מטעויות יקרות',
      description: 'כל טעות עלולה לעכב את התהליך ולגרום לעיכובים משמעותיים בחתונה'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // אפשר להוסיף כאן אנימציות או לוגיקה נוספת
    this.animateCardsOnScroll();
  }

  // אנימציה של הכרטיסים בגלילה
  private animateCardsOnScroll(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, index * 100);
        }
      });
    }, observerOptions);

    // אם רוצים להפעיל את האנימציה
    setTimeout(() => {
      const cards = document.querySelectorAll('.pain-card');
      cards.forEach(card => observer.observe(card));
    }, 100);
  }
}