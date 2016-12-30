import React, { Component } from 'react';
import './Search.css'

import Header from '../header/Header';
import SearchPicture from '../picture/SearchPicture';
import Footer from '../footer/Footer';

class Search extends Component {
  render() {
    return (
      <div className="container main-content">
        <Header />
        <SearchPicture />
        <Footer />
      </div>
    );
  }
}

export default Search;
