import React, { Component } from 'react';
import './Random.css';

import Header from '../header/Header'
import Footer from '../footer/Footer'

class Random extends Component {
  render() {
    return (
      <div className="container main-content">
        <Header />
        <input type="text" className="form-control" placeholder="Enter a term" />
        <Footer />
      </div>
    );
  }
}

export default Random;
