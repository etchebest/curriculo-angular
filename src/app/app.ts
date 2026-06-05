import { Component, inject, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';
import { NavBar } from './shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly zone = inject(NgZone);

  ngOnInit(): void {
    // Inicializa o SEO dinâmico
    this.seoService.init();

    // Rastreia coordenadas do mouse fora da detecção de mudanças do Angular
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.zone.runOutsideAngular(() => {
        document.addEventListener('mousemove', (e) => {
          document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
      });
    }
  }
}

