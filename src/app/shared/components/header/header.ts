import { Component, input } from '@angular/core';
import { BackLink } from '../back-link/back-link';
import { IHeader } from '../../../core/interfaces/header.interface';

@Component({
  selector: 'app-header',
  imports: [BackLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public headerData = input<IHeader>();
}
