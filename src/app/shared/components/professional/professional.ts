import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-professional',
  standalone:true,
  imports: [],
  templateUrl: './professional.html',
  styleUrl: './professional.scss',
})
export class Professional {
  readonly title = signal('Responsabilidade Profissional');

  readonly paragraphs = signal<string[]>([
    'Ao longo dos últimos anos venho atuando de forma 100% remota no desenvolvimento de sistemas corporativos utilizados internamente por diferentes áreas da empresa.',
    'Meu trabalho envolve colaboração constante com equipes de produto, marketing, operações e tecnologia, participando ativamente do desenvolvimento, evolução e manutenção de plataformas utilizadas no dia a dia da operação.',
    'Mesmo em ambiente remoto, mantenho forte compromisso com qualidade de código, organização das entregas e comunicação clara com as equipes envolvidas.',
  ]);
}
