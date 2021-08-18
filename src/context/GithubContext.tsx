import { FC, createContext, useState } from 'react';
import { IGithubUserInfo, IGithubContext } from '../types/context.interface';

const defaultState: IGithubUserInfo = {
  username: '',
  token: '',
};
const defaultContext: IGithubContext = {
  userInfo: defaultState,
  setUserInfo: () => {},
};
export const GithubContext = createContext(defaultContext);

const GithubProvider: FC = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState(defaultState);

  return (
    <GithubContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
