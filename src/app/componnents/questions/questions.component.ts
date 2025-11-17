import { Component } from '@angular/core';

interface Question {
  id: number;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questions: Question[] = [
    {
      id: 1,
      text: 'נמאס לך שבעלך לא מבין אותך?',
      icon: 'message-x'
    },
    {
      id: 2,
      text: 'נמאס לך שהוא לא מספיק מתחשב ברצונות ובצרכים שלך?',
      icon: 'heart-crack'
    },
    {
      id: 3,
      text: 'מתוסכל שאתה לא מצליח לפייס את אשתך?',
      icon: 'users-x'
    },
    {
      id: 4,
      text: 'היא מתייעצת עם כולם, רק לא איתך...?',
      icon: 'user-minus'
    },
    {
      id: 5,
      text: 'נמאס לכם שכל ויכוח קטן הופך למריבה?',
      icon: 'alert-triangle'
    },
    {
      id: 6,
      text: 'אין לכם כוח לשמוע שוב תלונות מבן/מבת הזוג?',
      icon: 'volume-x'
    }
  ];
}