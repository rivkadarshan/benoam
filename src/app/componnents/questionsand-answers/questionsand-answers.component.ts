// questionsand-answers.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-questionsand-answers',
  templateUrl: './questionsand-answers.component.html',
  styleUrls: ['./questionsand-answers.component.css'],
  animations: [
    trigger('slideDown', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1'
      })),
      transition('closed <=> open', animate('400ms ease-in-out'))
    ])
  ]
})
export class QuestionsandAnswersComponent implements OnInit {
  
  activeFaq: number | null = null;

  faqs: FAQ[] = [
     {
      id: 1,
      question: 'אני לא טיפוס של רגשות... זה בשבילי בכלל?',
      answer: 'דווקא אתה. אין כאן "רגשנות" – רק כלים ברורים שמדברים לגברים.'
    },
    {
      id: 2,
      question: 'זה מתאים גם אם אין לנו מריבות, רק נתק?',
      answer: 'כן. דווקא אז הכי חשוב לעצור ולהחזיר את החיבור – לפני שהנתק יהפוך לריחוק.'
    },
    {
      id: 3,
      question: 'זה יגרום לאשתי להפסיק להתלונן?',
      answer: 'אם תיישם את הכלים – אתה תפסיק לתת לה סיבה. התלונות ייעלמו מעצמן.'
    },
    {
      id: 4,
      question: 'זה מתאים גם אם מההתחלה לא הרגשנו אהבה?',
      answer: 'וודאי, אתם תלמדו איך בונים אהבה, כי לא סתם ה\' הוביל אותכם לחיות ביחד.'
    },
    {
      id: 5,
      question: 'האם זה דורש ממני להוריד מהגבריות שבי?',
      answer: 'בשום אופן לא, אתה תרגיש שהגבריות שלך מועצמת עוד ועוד.'
    },
    {
      id: 6,
      question: 'האם זה ייקח ממני הרבה זמן ביום?',
      answer: 'לא, עם הכלים שתקבל אשתך תתן לך יותר זמן ביום לעצמך בשמחה.'
    },
    {
      id: 7,
      question: 'זה באמת חינמי?',
      answer: 'לגמרי. כל עוד נרשמת בזמן – אתה מקבל גישה מלאה, בלי תשלום.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.setupScrollAnimation();
  }

  toggleFaq(index: number): void {
    if (this.activeFaq === index) {
      this.activeFaq = null;
    } else {
      this.activeFaq = index;
    }
  }

  private setupScrollAnimation(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => observer.observe(item));
    }, 100);
  }
}