import { IGithubRepository } from "../interfaces/github-repository.interface";

export class GithubRepositoryModel {

  static fromApi(data: any): IGithubRepository {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      html_url: data.html_url,
      archived: data.archived,
      homepage: data.homepage,
      language: data.language,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      fork: data.fork,
      updated_at: data.updated_at,
      created_at: data.created_at,
      default_branch: data.default_branch,
    };
  }

}
