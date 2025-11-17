// normalization.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normalization',
  templateUrl: './normalization.component.html',
  styleUrls: ['./normalization.component.css']
})
export class NormalizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScrollAnimation();
  }

  private initScrollAnimation(): void {
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
      const elements = document.querySelectorAll('.content-wrapper, .stat-card');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}