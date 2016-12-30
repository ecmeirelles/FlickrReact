import React, { Component } from 'react';
import axios from '../../node_modules/axios/lib/axios.js';
import './Picture.css';

class Picture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: [],
      term: ''
    }
  }

  random() {
    var tags = ['children', 'flower', 'candies', 'dogs', 'cats', 'car', 'butterfly']
    var rand = Math.floor((Math.random() * 7))

    this.setState({term: tags[rand]});
    return tags[rand]
  }

  componentDidMount() {
    var _this = this
    var tag = this.random()

    var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&"
        url += "api_key=f2d3e882afae6220e175c126c6b971ed&tags="+ tag + "&"
        url += "per_page=30&tag_mode=all&format=json&nojsoncallback=?"
    this.JSONRequest =
      axios
        .get(url)
        .then(function(result) {
          _this.setState({pictures: result.data.photos.photo});
        })
  }

  componentWillUnmount() {
    this.JSONRequest.abort();
  }

  render() {
    return (
      <div className="container picture-content">
        <h3 className="title"><strong>Keyword:</strong> <span className="term">{this.state.term}</span></h3>
        <div className="photos">
        {this.state.pictures.map(function(photo) {
          return (
            <img key={photo.id} src={"http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/"
              + photo.id + "_" + photo.secret + "_q.jpg"} alt={photo.title}/>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Picture;
