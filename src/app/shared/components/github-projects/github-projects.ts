import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-github-projects',
  standalone:true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './github-projects.html',
  styleUrl: './github-projects.scss',
})
export class GithubProjects {

}
