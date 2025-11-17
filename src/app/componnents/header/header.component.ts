// header.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  // Toggle mobile menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.classList.toggle('active');
    }
  }

  // Close mobile menu
  closeMenu(): void {
    this.isMenuOpen = false;
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.classList.remove('active');
    }
  }

  // Add scroll effect to header
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    const header = document.querySelector('.header');
    if (header) {
      if (this.isScrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}