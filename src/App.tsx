import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './providers/authProvider';
import { Layout, Login } from './layout';
import { Dashboard } from './dashboard';
import posts from './posts';
import users from './users';

const App = () => {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
