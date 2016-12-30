import React, { Component } from 'react';
import axios from '../../node_modules/axios/lib/axios.js';
import './Picture.css';

class Picture extends Component {
  constructor() {
    super()

    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
    var _this = this;
    var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&"
        url += "api_key=f2d3e882afae6220e175c126c6b971ed&tags=children&per_page=30&"
        url += "tag_mode=all&format=json&nojsoncallback=?"
    this.JSONRequest =
      axios
        .get(url)
        .then(function(result) {
          console.log(result);
          _this.setState({
            pictures: result.data.photos.photo
          });
        })
  }

  componentWillUnmount() {
    this.JSONRequest.abort();
  }

  render() {
    return (
      <div className="container picture-content">
        <div className="photos">
        {this.state.pictures.map(function(photo) {
          return (
            <img src={"http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/"
              + photo.id + "_" + photo.secret + "_q.jpg"} alt={photo.title}/>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Picture;
