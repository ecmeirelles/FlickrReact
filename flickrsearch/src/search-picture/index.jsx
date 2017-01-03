import React, { Component } from 'react';
import PicturesContainer from "../pictures-container"

export default class SearchPicture extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (event.key === 'Enter') {
      this.setState({term: event.target.value})
    }
  }
  render() {
    return (
      <div className="container picture-content">
        <input type="text" className="form-control title searchbar" placeholder="Search keyword..."
          onKeyPress={this.handleChange} /><br />
        <PicturesContainer tag={this.state.term}/>
      </div>
    );
  }
}
