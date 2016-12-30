import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="#" className="navbar-brand">
                <img className="img-responsive" src={require("./flickr.png")} alt="Flickr Logo"/>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/random">Random</Link></li>
                <li><Link to="/search">Search</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
