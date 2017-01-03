import React, { Component } from 'react';
import PicturesContainer from "../pictures-container"

export default class RandomPicture extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  componentDidMount() {
    var tags = ['children', 'flower', 'candies', 'dogs', 'cats', 'car', 'butterfly']
    var rand = Math.floor((Math.random() * tags.length))
    this.setState({ term: tags[rand] });
  }

  render() {
    return (
      <div className="container picture-content">
        <h3 className="title">
          <strong>Keyword:</strong>
          <span className="term">{this.state.term}</span>
        </h3>
        <PicturesContainer tag={this.state.term}/>
      </div>
    );
  }
}
