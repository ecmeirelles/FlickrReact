import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import App from './app';
import RandomPicture from './random-picture';
import SearchPicture from './search-picture';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/random" />

    <Route path="/" component={App}>
      <Route path="random" component={RandomPicture}></Route>
      <Route path="search" component={SearchPicture}></Route>
    </Route>
  </Router>,
document.getElementById('root'));
