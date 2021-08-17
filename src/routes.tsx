import * as React from 'react';
import { Route } from 'react-router-dom';
import Profile from './profile/Profile';

export default [<Route exact path="/profile" render={() => <Profile />} />];
