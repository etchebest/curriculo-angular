import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
 readonly title = signal('Tecnologias');

  readonly skills = signal<string[]>([
    'Angular',
    'TypeScript',
    'Node.js',
    'Firebase',
    'Azure DevOps',
    'SCSS',
    'Angular Material',
    'REST APIs',
  ]);
}
