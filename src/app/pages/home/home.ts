import { Component, signal } from '@angular/core';
import { About } from '../../shared/components/about/about';
import { Challenges } from '../../shared/components/challenges/challenges';
import { Context } from '../../shared/components/context/context';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from '../../shared/components/hero/hero';
import { Metrics } from '../../shared/components/metrics/metrics';
import { Professional } from '../../shared/components/professional/professional';
import { Projects } from '../../shared/components/projects/projects';
import { Skills } from '../../shared/components/skills/skills';
import { GithubProjects } from '../../shared/components/github-projects/github-projects';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Metrics,
    About,
    Context,
    Professional,
    Skills,
    Projects,
    Challenges,
    GithubProjects,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('curriculo');
}
