import React, { Component } from 'react';
import axios from '../../node_modules/axios/lib/axios.js';
import './Random.css';

import Header from '../header/Header';
import Picture from '../picture/Picture';
import Footer from '../footer/Footer';

class Random extends Component {
  render() {
    return (
      <div className="container main-content">
        <Header />
        <h3 className="title"><strong>Keyword:</strong> Children</h3>
        <Picture />
        <Footer />
      </div>
    );
  }
}

export default Random;
