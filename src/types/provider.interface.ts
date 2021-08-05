export interface Parameters {
  [key: string]: any;
}

export interface Error {
  [key: string]: any;
}

export interface Response {
  [key: string]: any;
}

export interface DataProvider {
  getList: (resource: string, params: Parameters) => Promise<Response[]>;
  getOne: (resource: string, params: Parameters) => Promise<Response>;
  getMany: (resource: string, params: Parameters) => Promise<Response[]>;
  getManyReference: (resource: string, params: Parameters) => Promise<Response>;
  create: (resource: string, params: Parameters) => Promise<void | Response>;
  update: (resource: string, params: Parameters) => Promise<void | Response>;
  updateMany: (
    resource: string,
    params: Parameters
  ) => Promise<void | Response>;
  delete: (resource: string, params: Parameters) => Promise<void | Response>;
  deleteMany: (
    resource: string,
    params: Parameters
  ) => Promise<void | Response>;
}

export interface AuthProvider {
  // authentication
  login: (params: Parameters) => Promise<void>;
  checkError: (error: Error) => Promise<void | Response>;
  checkAuth: (params: Parameters) => Promise<void | Response>;
  logout: () => Promise<void>;
  getIdentity: () => Promise<any>;
  // authorization
  getPermissions: (params: Parameters) => Promise<any>;
}
