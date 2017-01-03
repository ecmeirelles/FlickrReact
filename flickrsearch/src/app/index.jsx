import React, { Component } from 'react';
import TopHeader from "../top-header";
import BottomFooter from "../bottom-footer";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container main-content">
        <TopHeader />
        {this.props.children}
        <BottomFooter />
      </div>
    );
  }
}
