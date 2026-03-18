import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [],
  templateUrl: './context.html',
  styleUrl: './context.scss',
})
export class Context {
  readonly title = signal('Contexto de Atuação');

  readonly items = signal<string[]>([
    'Plataformas administrativas internas',
    'Sistemas operacionais para gestão de restaurantes',
    'Ferramentas de gestão de campanhas e benefícios',
    'Dashboards utilizados por equipes de marketing e operações',
    'Sistemas internos para suporte técnico e gestão operacional',
  ]);
}
