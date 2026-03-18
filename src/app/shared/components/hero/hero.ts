import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface IHeroLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
  variant: string;
}

@Component({
  selector: 'app-hero',
standalone:true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly name = 'Cristian Etchebest';
  readonly role = 'Desenvolvedor Front-End (Angular)';
  readonly stack = 'Angular • TypeScript • Node.js • Firebase • Azure DevOps';

  readonly profileImage = 'images/profile.jpg';

  readonly links: IHeroLink[] = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/cristianetchebest',
      external: true,
      icon: 'open_in_new',
      variant: 'primary',
    },
    {
      label: 'Contato',
      href: '/contato',
      external: false,
      icon: 'mail',
      variant: 'contact',
    },
  ];
}
