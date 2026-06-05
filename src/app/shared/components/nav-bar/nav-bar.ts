import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  private readonly router = inject(Router);
  
  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.doScroll(sectionId);
        }, 150);
      });
    } else {
      this.doScroll(sectionId);
    }
  }

  private doScroll(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
