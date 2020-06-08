import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Search from 'pages/Search';
import Favorited from 'pages/Favorited';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/search" component={Search} exact />
    <Route path="/favorited" component={Favorited} exact />
  </BrowserRouter>
);

export default Routes;
