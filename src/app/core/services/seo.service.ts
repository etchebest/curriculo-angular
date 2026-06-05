import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  /**
   * Inicializa o ouvinte de navegação para atualizar metatags dinamicamente
   */
  init(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route) => {
        const title = this.titleService.getTitle();
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ name: 'twitter:title', content: title });

        const data = route.snapshot.data;
        if (data && data['description']) {
          this.metaService.updateTag({ name: 'description', content: data['description'] });
          this.metaService.updateTag({ property: 'og:description', content: data['description'] });
          this.metaService.updateTag({ name: 'twitter:description', content: data['description'] });
        }
        
        if (data && data['keywords']) {
          this.metaService.updateTag({ name: 'keywords', content: data['keywords'] });
        }
      });
  }
}
