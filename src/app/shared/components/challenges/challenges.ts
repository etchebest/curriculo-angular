import { Component, signal } from '@angular/core';

interface IChallengeItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [],
  templateUrl: './challenges.html',
  styleUrl: './challenges.scss',
})
export class Challenges {
  readonly title = signal('Desafios Técnicos');

  readonly challenges = signal<IChallengeItem[]>([
    {
      title: 'Refatoração Angular v12',
      description: 'Modernização dos aplicativos da v12 para v20+ e implementando novas técnologias como Signals, Control Flow e Angular Material.',
    },
    {
      title: 'Arquitetura Front-End Modular',
      description: 'Estruturação da aplicação em componentes reutilizáveis e arquitetura limpa.',
    },
    {
      title: 'Integração com Firebase',
      description:
        'Uso de Firestore, Functions, Hosting, Storage e Auth para construção de plataformas com dados em tempo real.',
    },
    {
      title: 'Migração de Backend Firebase → Azure',
      description:
        'Adequação do front-end para integração com novas APIs durante a migração da infraestrutura para Azure.',
    },
  ]);
}
