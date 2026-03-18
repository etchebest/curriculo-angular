import { Component, signal } from '@angular/core';

interface IProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface IProjectGroup {
  title: string;
  projects: IProjectItem[];
}

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly groups = signal<IProjectGroup[]>([
    {
      title: 'Sistemas Operacionais',
      projects: [
        {
          title: 'Plataforma de Cashback',
          description:
            'Plataforma administrativa utilizada por equipes internas para gestão de campanhas promocionais, benefícios e regras de cashback aplicadas aos clientes da rede.',
          imageUrl: 'cashback-system.jpg',
          imageAlt: 'Plataforma de Cashback',
        },
        {
          title: 'Sistema de Benefícios / Premiações',
          description:
            'Módulo administrativo responsável pela gestão de benefícios e premiações dentro da plataforma de cashback.',
          imageUrl: 'benefit-system.jpg',
          imageAlt: 'Sistema de Benefícios',
        },
        {
          title: 'Gerenciamento de Filas e Mesas (GFM)',
          description:
            'Sistema operacional utilizado pelas equipes internas dos restaurantes para organização do fluxo de atendimento.',
          imageUrl: 'queue-management.jpg',
          imageAlt: 'Gerenciamento de Filas',
        },
        {
          title: 'Sistema de Reserva de Mesas',
          description:
            'Sistema interno utilizado para gerenciamento de reservas antecipadas de mesas e controle de disponibilidade.',
          imageUrl: 'table-reservation.jpg',
          imageAlt: 'Reserva de Mesas',
        },
      ],
    },
    {
      title: 'Plataformas Administrativas',
      projects: [
        {
          title: 'HelpDesk Radir',
          description:
            'Portal interno para gerenciamento de chamados técnicos e atendimento de suporte operacional.',
          imageUrl: 'helpdesk-system.jpg',
          imageAlt: 'HelpDesk Radir',
        },
        {
          title: 'Portal Addiante',
          description:
            'Primeira versão do portal web interno da Addiante para acesso a funcionalidades administrativas.',
          imageUrl: 'solution-portal.jpg',
          imageAlt: 'Portal Addiante',
        },
      ],
    },
  ]);
}
