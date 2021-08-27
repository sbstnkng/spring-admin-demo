import {
  GetListParams,
  GetOneParams,
  GetManyParams,
  GetManyReferenceParams,
  CreateParams,
  UpdateParams,
  UpdateManyParams,
  DeleteParams,
  DeleteManyParams,
} from 'react-admin';
import { Octokit } from 'octokit';

export class GithubDataProvider {
  private static URL: string = 'https://api.github.com/';
  private octokit: Octokit;

  constructor(token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  getList(resource: string, params: GetListParams) {
    console.log('resource:', resource);
    console.log('params:', params);
    return Promise.resolve({ total: 0, data: [] });
  }

  getOne(resource: string, params: GetOneParams) {
    console.log('resource:', resource);
    console.log('params:', params);
    return Promise.reject();
  }

  getMany(resource: string, params: GetManyParams) {
    console.log('resource:', resource);
    console.log('params:', params);
    return Promise.resolve({ data: [] });
  }

  getManyReference(resource: string, params: GetManyReferenceParams) {
    console.log('resource:', resource);
    console.log('params:', params);
    return Promise.resolve({ total: 0, data: [] });
  }

  create(resource: string, params: CreateParams) {
    return Promise.reject('Not supported');
  }

  update(resource: string, params: UpdateParams) {
    return Promise.reject('Not supported');
  }

  updateMany(resource: string, params: UpdateManyParams) {
    return Promise.reject('Not supported');
  }

  delete(resource: string, params: DeleteParams) {
    return Promise.reject('Not supported');
  }

  deleteMany(resource: string, params: DeleteManyParams) {
    return Promise.reject('Not supported');
  }
}
