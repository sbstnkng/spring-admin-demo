import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './providers/authProvider';
import { Dashboard } from './components/dashboard';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { UserList } from './components/userList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const App = () => {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  return (
    <div className="App">
      <Admin
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
    </div>
  );
};

export default App;
