import {
  AuthProvider as ExtAuthProvider,
  DataProvider as ExtDataProvider,
} from 'react-admin';

export interface DataProvider extends ExtDataProvider {}
export interface AuthProvider extends ExtAuthProvider {}
