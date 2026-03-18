import { Component, signal } from '@angular/core';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatAnchor, MatButtonModule,MatIconModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
readonly title = signal('Sobre');

  readonly paragraphs = signal<string[]>([
    'Desenvolvedor Front-End especializado em Angular com mais de 6 anos de experiência no desenvolvimento de aplicações web escaláveis e sistemas corporativos.',
    'Atuei no desenvolvimento de plataformas digitais internas para o Grupo Madero, incluindo sistemas de cashback, gerenciamento de filas, reservas de mesas e plataformas administrativas utilizadas por equipes internas como liderança operacional, marketing, suporte técnico e gestão.',
    'Os sistemas desenvolvidos são utilizados internamente por equipes operacionais e administrativas em diferentes áreas da empresa, apoiando a gestão e operação dos restaurantes.',
  ]);
}
