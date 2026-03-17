import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IGithubRepository } from '../interfaces/github-repository.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private http = inject(HttpClient);

  readonly baseUrl = environment.URL_GITHUB;

  private readonly headers = new HttpHeaders({
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  });

  /**
   * Busca todos os repositórios públicos do usuário
   */
  getRepositories(): Observable<IGithubRepository[]> {
    const url = `${this.baseUrl}/?sort=updated&per_page=100&type=owner`;

    return this.http
      .get<IGithubRepository[]>(url, { headers: this.headers })
      .pipe(map((repos) => this.filterRepositories(repos)));
  }

  /**
   * Filtra repositórios que fazem sentido para o portfólio
   */
  private filterRepositories(repos: IGithubRepository[]): IGithubRepository[] {
    return repos
      .filter((repo) => !repo.fork)
      .filter((repo) => repo.description !== null)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
}
