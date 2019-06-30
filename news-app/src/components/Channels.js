import React, { Component } from "react";
import { Link } from "react-router-dom";
class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: null
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=0279b927613e40debd2a3f4264057868"
    )
      .then(response => response.json())
      .then(data => this.setState({ channels: data.sources }));
  }
  render() {
    const { channels } = this.state;
    console.log(channels);
    if (channels != null) {
      return (
        <div>
          <h4 class="text-center text-dark">New's Channels</h4>
          {channels.map(channel => (
            <Link to={`/channel/${channel.id}`}>
              <div class="card mb-3">
                <div class="card-header">{channel.name}</div>
                <div class="card-body">
                  <h5 class="card-title">{channel.description}</h5>
                  <p class="text-primary">{channel.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    } else {
      return "Loading";
    }
  }
}

export default Channels;
