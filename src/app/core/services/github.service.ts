import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

import { IGithubRepository } from '../interfaces/github-repository.interface';
import { environment } from '../../../environments/environment';
import { GithubRepositoryModel } from '../models/github-repository.model';
import { FEATURED_REPOSITORIES } from '../config/featured-repositories.config';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly http = inject(HttpClient);

  readonly baseUrl = environment.URL_GITHUB;

  private readonly queryParams = '?sort=updated&per_page=100&type=owner';

  private readonly headers = new HttpHeaders({
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  });

  /**
   * Busca todos os repositórios públicos do usuário com cache de 30 minutos
   */
  getRepositories(): Observable<IGithubRepository[]> {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const cached = localStorage.getItem('github_repos');
      const cachedTime = localStorage.getItem('github_repos_time');
      if (cached && cachedTime) {
        const age = Date.now() - Number(cachedTime);
        if (age < 30 * 60 * 1000) { // 30 minutos
          return of(JSON.parse(cached));
        }
      }
    }

    const url = `${this.baseUrl}${this.queryParams}`;

    return this.http
      .get<any[]>(url, { headers: this.headers })
      .pipe(
        map((repos) => this.filterRepositories(repos.map(GithubRepositoryModel.fromApi))),
        tap((filtered) => {
          if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem('github_repos', JSON.stringify(filtered));
            localStorage.setItem('github_repos_time', String(Date.now()));
          }
        })
      );
  }


  /**
   * Filtra repositórios que fazem sentido para o portfólio
   */
  private filterRepositories(repos: IGithubRepository[]): IGithubRepository[] {
    const repoMap = new Map(repos.map((repo) => [repo.name, repo]));

    return FEATURED_REPOSITORIES.map((config) => {
      const repo = repoMap.get(config.name);

      if (!repo) return null;

      return {
        ...repo,
        description: config.description ?? repo.description,
      };
    }).filter((repo): repo is IGithubRepository => !!repo);
  }
}
