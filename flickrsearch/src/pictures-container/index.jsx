import React, { Component } from 'react';
import axios from 'axios';

import './Picture.css';

export default class PicturesContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pictures: [],
      tag: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tag === this.state.tag) {
      return
    }

    let tag = nextProps.tag;

    var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&"
        url += "api_key=f2d3e882afae6220e175c126c6b971ed&tags="+ tag + "&"
        url += "per_page=30&tag_mode=all&format=json&nojsoncallback=?"

    this.JSONRequest =
      axios
        .get(url)
        .then(result => this.setState({ pictures: result.data.photos.photo }))
  }

  componentWillUnmount() {
    if (!!this.JSONRequest) {
      this.JSONRequest.abort();
    }
  }

  getPhotoUrl(photo) {
    return `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`
  }

  render() {
    return (
      <div className="photos">
        {this.state.pictures.map(photo => (<img key={photo.id} src={this.getPhotoUrl(photo)} alt={photo.title}/>))}
      </div>
    );
  }
}
