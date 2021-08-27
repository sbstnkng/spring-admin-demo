import { useContext } from 'react';
import { Admin, Resource } from 'react-admin';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import GithubProvider from './context/GithubContext';
import { Layout, Login } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import repositories from './repositories';
import { firebaseConfig } from './providers/firebaseConfig';
import { GithubDataProvider } from './providers/githubDataProvider';
import { GithubContext } from './context/GithubContext';
import { IGithubContext } from './types/context.interface';

const authProvider = FirebaseAuthProvider(firebaseConfig, {
  persistence: 'none',
});

const App = () => {
  const { userInfo }: IGithubContext = useContext(GithubContext);
  const dataProvider = new GithubDataProvider(userInfo.token);

  return (
    <div className="App">
      <GithubProvider>
        <Admin
          layout={Layout}
          loginPage={Login}
          dashboard={Dashboard}
          customRoutes={customRoutes}
          authProvider={authProvider}
          dataProvider={dataProvider}
        >
          <Resource name="repos" {...repositories} />
        </Admin>
      </GithubProvider>
    </div>
  );
};

export default App;
