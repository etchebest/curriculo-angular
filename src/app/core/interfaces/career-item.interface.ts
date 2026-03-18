export interface ICareerItem {
  period: string;
  title: string;
  company?: string;
  description: string[];
  phase: string;
  side: 'left' | 'right';
}
