import { Component } from '@angular/core';
import { Footer } from '../../shared/components/footer/footer';
import { ICareerItem } from '../../core/interfaces/career-item.interface';
import { MatIconModule } from '@angular/material/icon';
import { BackLink } from '../../shared/components/back-link/back-link';

@Component({
  selector: 'app-trajetoria',
  imports: [Footer,MatIconModule, BackLink],
  templateUrl: './trajetoria.html',
  styleUrl: './trajetoria.scss',
})
export class Trajetoria {
  readonly career: ICareerItem[] = [
    {
      period: '2000 — 2004',
      title: 'Mecânico Automotivo',
      phase: '🔧 Mecânica & Eletrônica',
      side: 'left',
      description: [
        'Atuação com injeção eletrônica automotiva.',
        'Experiência com marcas como Toyota, Suzuki, KIA Motors e Mercedes-Benz.',
        'Contato com sistemas eletrônicos que despertaram meu interesse por tecnologia.',
      ],
    },

    {
      period: '2005 — 2014',
      title: 'Hospital Mãe de Deus',
      phase: '🏥 Área da Saúde',
      side: 'right',
      description: [
        'Atuação na recepção de internação e posteriormente no Call Center.',
        'Desenvolvimento de habilidades operacionais e gestão de pessoas.',
        'Conclusão do curso técnico em informática.',
        'Início da graduação em Análise e Desenvolvimento de Sistemas (FADERGS).',
      ],
    },

    {
      period: '2014 — 2019',
      title: 'Técnico de Informática',
      phase: '💻 Infraestrutura de TI',
      side: 'left',
      description: [
        'Helpdesk, administração de servidores e redes.',
        'Atuação no Hospital Independência.',
        'Posteriormente também no Hospital Divina Providência após fusão das instituições.',
      ],
    },

    {
      period: '2019 — 2023',
      title: 'Desenvolvedor Front-End — Meta do Brasil',
      phase: '🚀 Engenharia de Software',
      side: 'right',
      description: [
        'Desenvolvimento de sistemas corporativos para empresas parceiras.',
        'Tecnologias utilizadas: Angular, VueJS, React, PHP e AdonisJS.',
        'Especialização em Angular para aplicações corporativas.',
      ],
    },

    {
      period: '2023 — Presente',
      title: 'Fundador — CentralWeb',
      phase: '🏢 Empreendedorismo',
      side: 'left',
      description: [
        'Fundação da CentralWeb.',
        'Desenvolvimento de aplicações web corporativas.',
        'Foco em Angular, TypeScript e Node.js.',
      ],
    },
    {
      side: 'right',
      period: '2023 — Presente',
      title: 'Desenvolvedor Front-End — Grupo Madero',
      phase: '🚀 Projetos Corporativos',
      description: [
        'Atuação no desenvolvimento e evolução de sistemas corporativos internos.',
        'Projetos voltados para processos e operações do negócio.',
        'Tecnologias utilizadas: Angular, TypeScript, Node.js e Firebase.',
      ],
    },
  ];
}
