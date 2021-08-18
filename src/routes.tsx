import { Route } from 'react-router-dom';
import Profile from './profile/Profile';

const routes = [<Route exact path="/profile" render={() => <Profile />} />];

export default routes;
