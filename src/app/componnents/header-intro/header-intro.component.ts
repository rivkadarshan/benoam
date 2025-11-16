// header-intro.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header-intro',
  templateUrl: './header-intro.component.html',
  styleUrls: ['./header-intro.component.css']
})
export class HeaderIntroComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  private initAnimations(): void {
    // אנימציות נוספות אם צריך
    this.observeElements();
  }

  private observeElements(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('.text-content, .visual-content');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }

  // פונקציות נוספות לפי הצורך
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}