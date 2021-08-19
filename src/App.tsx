import { Admin, Resource } from 'react-admin';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import GithubProvider from './context/GithubContext';
import { Layout, Login } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import repositories from './repositories';
import { firebaseConfig } from './providers/firebaseConfig';
import { githubDataProvider } from './providers/githubDataProvider';

const authProvider = FirebaseAuthProvider(firebaseConfig, {
  persistence: 'none',
});

const App = () => {
  return (
    <div className="App">
      <GithubProvider>
        <Admin
          layout={Layout}
          loginPage={Login}
          dashboard={Dashboard}
          customRoutes={customRoutes}
          authProvider={authProvider}
          dataProvider={githubDataProvider}
        >
          <Resource name="repositories" {...repositories} />
        </Admin>
      </GithubProvider>
    </div>
  );
};

export default App;
