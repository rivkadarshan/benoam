import { Component } from '@angular/core';

interface Achievement {
  icon: string;
  number: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  achievements: Achievement[] = [
    {
      icon: 'users',
      number: '14+',
      label: 'שנות ניסיון'
    },
    {
      icon: 'heart',
      number: '500+',
      label: 'זוגות מלווים'
    },
    {
      icon: 'award',
      number: '100%',
      label: 'מחויבות להצלחה'
    }
  ];
}