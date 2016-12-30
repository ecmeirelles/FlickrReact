import React, { Component } from 'react';
import './Random.css';

import Header from '../header/Header';
import RandomPicture from '../picture/RandomPicture';
import Footer from '../footer/Footer';

class Random extends Component {
  render() {
    return (
      <div className="container main-content">
        <Header />
        <RandomPicture />
        <Footer />
      </div>
    );
  }
}

export default Random;
