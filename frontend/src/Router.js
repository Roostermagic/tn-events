import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Router;
