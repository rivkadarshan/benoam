import { Component } from '@angular/core';

interface Recommendation {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  currentIndex = 0;
  
  recommendations: Recommendation[] = [
    {
      id: 1,
      name: 'שרה כהן',
      role: 'מנהלת שיווק',
      company: 'טק ישראל',
      image: 'assets/images/user1.jpg',
      rating: 5,
      text: 'השירות שקיבלתי היה פשוט מדהים! הצוות המקצועי והיחס האישי עשו את כל הההבדל. ממליצה בחום!'
    },
    {
      id: 2,
      name: 'דוד לוי',
      role: 'מנכ"ל',
      company: 'חברת הייטק בע"מ',
      image: 'assets/images/user2.jpg',
      rating: 5,
      text: 'עבודה מקצועית ברמה הגבוהה ביותר. הפתרון שקיבלנו עלה על כל הציפיות והתוצאות מדברות בעד עצמן.'
    },
    {
      id: 3,
      name: 'מיכל אברהם',
      role: 'בעלת עסק',
      company: 'עסק פרטי',
      image: 'assets/images/user3.jpg',
      rating: 5,
      text: 'תודה רבה על השירות המעולה! הייתה לי חוויה נהדרת מתחילת הדרך ועד הסוף. בהחלט אחזור.'
    },
    {
      id: 4,
      name: 'יוסי מזרחי',
      role: 'מנהל פרויקטים',
      company: 'אינטגרל טכנולוגיות',
      image: 'assets/images/user4.jpg',
      rating: 5,
      text: 'שירות יוצא מן הכלל! תשומת לב לפרטים, מקצועיות ויחס אישי. ההשקעה השתלמה פי כמה וכמה.'
    }
  ];

  get visibleRecommendations(): Recommendation[] {
    const length = this.recommendations.length;
    return [
      this.recommendations[this.currentIndex],
      this.recommendations[(this.currentIndex + 1) % length],
      this.recommendations[(this.currentIndex + 2) % length]
    ];
  }

  nextRecommendation(): void {
    this.currentIndex = (this.currentIndex + 1) % this.recommendations.length;
  }

  previousRecommendation(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.recommendations.length - 1 
      : this.currentIndex - 1;
  }

  goToRecommendation(index: number): void {
    this.currentIndex = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}