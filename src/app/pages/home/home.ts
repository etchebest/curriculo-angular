import { Component, signal } from '@angular/core';
import { About } from '../../components/about/about';
import { Challenges } from '../../components/challenges/challenges';
import { Context } from '../../components/context/context';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { Metrics } from '../../components/metrics/metrics';
import { Professional } from '../../components/professional/professional';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';

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
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('curriculo');
}
