import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface IMetricItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-metrics',
  imports: [MatCardModule],
  templateUrl: './metrics.html',
  styleUrl: './metrics.scss',
})
export class Metrics {
  readonly metrics = signal<IMetricItem[]>([
    {
      value: '6+ anos',
      label: 'experiência em desenvolvimento web',
    },
    {
      value: '10+',
      label: 'sistemas corporativos desenvolvidos',
    },
    {
      value: '3',
      label: 'plataformas operacionais em produção',
    },
    {
      value: '100%',
      label: 'experiência em trabalho remoto',
    },
  ]);
}
