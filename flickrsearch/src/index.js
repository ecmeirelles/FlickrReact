import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Random from './random/Random';
import Search from './search/Search';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/random" />
    <Route path="/random" component={Random}></Route>
    <Route path="/search" component={Search}></Route>
  </Router>,
document.getElementById('root'));
