import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-link',
  imports: [RouterLink, MatIconModule],
  templateUrl: './back-link.html',
  styleUrl: './back-link.scss',
})
export class BackLink {
  readonly link = input<string>('/');
  readonly label = input<string>('Voltar');
}
