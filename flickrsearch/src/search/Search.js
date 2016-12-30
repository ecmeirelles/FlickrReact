import React, { Component } from 'react';

import Header from '../header/Header'
import Footer from '../footer/Footer'

class Search extends Component {
  render() {
    return (
      <div className="container main-content">
        <Header />
        <input type="text" className="form-control" placeholder="Enter a term" />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Search;
