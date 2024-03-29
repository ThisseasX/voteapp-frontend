import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import MyError from '../MyError/MyError';
import Vote from '../Vote/Vote';

export default () => (
  <Switch>
    <Route exact path="/vote" component={Vote} />
    <Route exact path="/history" component={MyError} />
    <Route exact path="/rankings" component={MyError} />
    <Route exact path="/login" component={LoginRegisterForm} />
    <Route exact path="/register" component={LoginRegisterForm} />
  </Switch>
);
