import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface IFooterLink {
  label: string;
  href: string;
  external?: boolean;
}
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = signal(new Date().getFullYear());

  readonly links = signal<IFooterLink[]>([
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/cristianetchebest',
      external: true,
    },
    {
      label: 'Contato',
      href: '/contato',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/5551989547887?text=Olá%20Cristian,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.',
      external: true,
    },
    {
      label: 'Trajetória',
      href: '/trajetoria',
    },
  ]);
}
