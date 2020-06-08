import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Search from 'pages/Search';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/search" component={Search} exact />
  </BrowserRouter>
);

export default Routes;
