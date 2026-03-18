import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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
   * Busca todos os repositórios públicos do usuário
   */
  getRepositories(): Observable<IGithubRepository[]> {
    const url = `${this.baseUrl}${this.queryParams}`;

    return this.http
      .get<any[]>(url, { headers: this.headers })
      .pipe(map((repos) => this.filterRepositories(repos.map(GithubRepositoryModel.fromApi))));
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
