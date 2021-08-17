import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import GithubProvider from './context/GithubContext';
import { Layout, Login } from './layout';
import { Dashboard } from './dashboard';
import posts from './posts';
import users from './users';
import { firebaseConfig } from './providers/firebaseConfig';

const authProvider = FirebaseAuthProvider(firebaseConfig, {});

const App = () => {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  return (
    <div className="App">
      <GithubProvider>
        <Admin
          layout={Layout}
          loginPage={Login}
          dashboard={Dashboard}
          authProvider={authProvider}
          dataProvider={dataProvider}
        >
          <Resource name="posts" {...posts} />
          <Resource name="users" {...users} />
        </Admin>
      </GithubProvider>
    </div>
  );
};

export default App;
