import { Component, input } from '@angular/core';
import { IGithubRepository } from '../../../core/interfaces/github-repository.interface';

@Component({
  selector: 'app-github-card',
  standalone:true,
  imports: [],
  templateUrl: './github-card.html',
  styleUrl: './github-card.scss',
})
export class GithubCard {
  repo = input.required<IGithubRepository>();
}
