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
import { DataProvider } from '../types/provider.interface';

export const githubDataProvider: DataProvider = {
  getList: (resource: string, params: GetListParams) => {
    return Promise.resolve({ total: 0, data: [] });
  },
  getOne: (resource: string, params: GetOneParams) => {
    return Promise.reject();
  },
  getMany: (resource: string, params: GetManyParams) => {
    return Promise.resolve({ data: [] });
  },
  getManyReference: (resource: string, params: GetManyReferenceParams) => {
    return Promise.resolve({ total: 0, data: [] });
  },
  create: (resource: string, params: CreateParams) => {
    return Promise.reject('Not supported');
  },
  update: (resource: string, params: UpdateParams) => {
    return Promise.reject('Not supported');
  },
  updateMany: (resource: string, params: UpdateManyParams) => {
    return Promise.reject('Not supported');
  },
  delete: (resource: string, params: DeleteParams) => {
    return Promise.reject('Not supported');
  },
  deleteMany: (resource: string, params: DeleteManyParams) => {
    return Promise.reject('Not supported');
  },
};
