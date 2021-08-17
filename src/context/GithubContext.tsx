import { FC, createContext, useState } from 'react';

const defaultValue: { userInfo: any; setUserInfo: any } = {
  userInfo: {},
  setUserInfo: () => {},
};
export const GithubContext = createContext(defaultValue);

const GithubProvider: FC = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState({ username: '', token: '' });

  return (
    <GithubContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
