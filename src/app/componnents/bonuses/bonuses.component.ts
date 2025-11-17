import { Component } from '@angular/core';

interface Bonus {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.css']
})
export class BonusesComponent {
  bonuses: Bonus[] = [
    {
      id: 1,
      icon: 'video',
      title: 'את הדרכת סוד האהבה',
      description: 'בחינם'
    },
    {
      id: 2,
      icon: 'clock',
      title: 'הקלטת הוובינר ל-48 שעות',
      description: 'שתוכל לעבור שוב עם הראש שקט'
    },
    {
      id: 3,
      icon: 'file',
      title: 'קובץ תרגול קסם יומי',
      description: 'לאהבה מנצחת'
    }
  ];
}