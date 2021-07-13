import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Page } from './Page';

export const App: FC = () => (
  <Router>
    <Route path="/" component={Page} />
  </Router>
);
