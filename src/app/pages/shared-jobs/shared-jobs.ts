import { Component, inject, OnInit, signal } from '@angular/core';
import { IGithubRepository } from '../../core/interfaces/github-repository.interface';
import { GithubService } from '../../core/services/github.service';
import { Footer } from '../../shared/components/footer/footer';
import { GithubCard } from '../../shared/components/github-card/github-card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Header } from '../../shared/components/header/header';
import { IHeader } from '../../core/interfaces/header.interface';

@Component({
  selector: 'app-shared-jobs',
  standalone: true,
  imports: [GithubCard, Footer, MatProgressSpinnerModule, Header],
  templateUrl: './shared-jobs.html',
  styleUrl: './shared-jobs.scss',
})
export class SharedJobs implements OnInit {
  #gitgubServide = inject(GithubService);
  #snackBar = inject(MatSnackBar);

  public repositories = signal<IGithubRepository[] | []>([]);
  public loading = signal<boolean>(false);

  public headerData = signal<IHeader>({
    pageName: 'Integração com API',
    title: 'Projetos do GitHub',
    subtitle:
      'Projetos reais consumidos diretamente da API do GitHub, refletindo minha evolução técnica, organização de código e experiência com aplicações web modernas. Estes são alguns dos projetos publicos disponíveis no Github.',
  });

  ngOnInit(): void {
    this.getDataGithub();
  }

  getDataGithub() {
    this.loading.set(true);
    this.#gitgubServide.getRepositories().subscribe({
      next: (resp) => {
        this.repositories.set(resp);
      },
      error: () => {
        this.loading.set(false);
        this.#snackBar.open('Houve um problema ao tentar fazer recuperar os projetos!', 'X', {
          duration: 3000,
        });
      },
      complete: () => this.loading.set(false),
    });
  }
}
