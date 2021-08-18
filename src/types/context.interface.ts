export interface IGithubUserInfo {
  username: string;
  token: string;
}

export interface IGithubContext {
  userInfo: IGithubUserInfo;
  setUserInfo: any;
}
