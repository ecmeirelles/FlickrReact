import React, { Component } from 'react';

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
              <a className="navbar-brand" href="#">
                <img className="img-responsive" src={require("./flickr.png")}/>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="">Random</a></li>
                <li><a href="">Search</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;