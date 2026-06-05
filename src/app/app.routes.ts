import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Cristian Etchebest | Angular Front-End Developer',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: {
      description: 'Cristian Etchebest é desenvolvedor Front-End especializado em Angular, TypeScript e aplicações web corporativas. Experiência em sistemas administrativos, Firebase, APIs e arquitetura moderna de software.',
      keywords: 'Cristian Etchebest, Angular developer, Front-End Developer, TypeScript developer, Software Engineer, desenvolvimento web, Angular especialista, Firebase developer, Node.js developer'
    }
  },

  {
    path: 'contato',
    title: 'Fale comigo | Cristian Etchebest',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    data: {
      description: 'Entre em contato com Cristian Etchebest para oportunidades de desenvolvimento Front-End, projetos e parcerias em tecnologia.',
      keywords: 'Contato Cristian Etchebest, freelancer Angular, contratar desenvolvedor Angular, front-end developer, contato'
    }
  },
  {
    path: 'trajetoria',
    title: 'Trajetória | Cristian Etchebest',
    loadComponent: () => import('./pages/trajetoria/trajetoria').then((m) => m.Trajetoria),
    data: {
      description: 'Conheça a história e trajetória profissional de Cristian Etchebest, da recepção hospitalar e infraestrutura de TI ao desenvolvimento Angular no Grupo Madero e CentralWeb.',
      keywords: 'Trajetória Cristian Etchebest, carreira programador, experiência Angular, Grupo Madero, Meta do Brasil'
    }
  },
  {
    path: 'projetos-compartilhados',
    title: 'Projetos do Github | Cristian Etchebest',
    loadComponent: () => import('./pages/shared-jobs/shared-jobs').then((m) => m.SharedJobs),
    data: {
      description: 'Explore os principais repositórios públicos e projetos open source de Cristian Etchebest consumidos diretamente da API do GitHub.',
      keywords: 'Projetos GitHub Cristian Etchebest, portfólio Angular, código aberto, TypeScript projetos'
    }
  },
  {
    path: '**',
    redirectTo: '',
  },
];

