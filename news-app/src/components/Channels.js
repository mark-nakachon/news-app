import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from './Loading';
class Channels extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      channels: null
    };
  }
  componentDidMount() {
    this._isMounted = true;
    fetch(
      "https://newsapi.org/v2/sources?apiKey=0279b927613e40debd2a3f4264057868"
    )
      .then(response => response.json())
      .then(data =>
        {
          if(this._isMounted){this.setState({ channels: data.sources })}
        } );
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    const { channels } = this.state;
    console.log(channels);
    if (channels != null) {
      return (
        <div>
          <h4 class="text-center text-light">New's Channels</h4>
          <div class="container">
          {channels.map(channel => (
              <div class="card bg-light rounded p-1 mb-4">
                <Link to={`/channel/${channel.id}`} style={{textDecoration:'None'}}>
                <div class="card-header d-flex justify-content-between bg-dark">
                  <h5 class="text-light">{channel.name}</h5>
                  <h5 class="text-danger"><span class="text-info mr-2">Category:</span>{channel.category.charAt(0).toUpperCase()+channel.category.slice(1)}</h5>
                  </div>
                <div class="card-body">
                  <h5 class="card-title text-dark">{channel.description}</h5>

                </div>
                </Link>
              </div>
          ))}
          </div>
        </div>
      );
    } else {
      return (<div class="text-center"><Loading/></div>);
    }
  }
}

export default Channels;
