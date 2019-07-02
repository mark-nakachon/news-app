import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from './Loading';
import Dropdown from './Dropdown';

export function filterByCategory(query){
    this.setState({category:query});
    console.log(query);
}
class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: null,
      category:null,
      filteredChannels:null
    };
    filterByCategory = filterByCategory.bind(this);
    this.abortController = new AbortController();
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=0279b927613e40debd2a3f4264057868",
      {signal:this.abortController.signal}
    )
      .then(response => response.json())
      .then(data =>
        {
          this.setState({ channels: data.sources })
        } )
        .catch(err=>{
          console.log(err);
        });
  }
  componentDidUpdate(prevProps,prevState){
      if(prevState.category !== this.state.category){

      const filteredData = this.state.channels.filter((obj)=>{
          if (obj.category == this.state.category){
              return true;
          }
      });
      this.setState({filteredChannels:filteredData});
      }
  }

  componentWillUnmount(){

  }
  render() {
    const { channels,filteredChannels } = this.state;
    console.log(channels);
    if(filteredChannels!==null){
           return (
        <div class="container">
          <h4 class="text-center text-light">New's Channels</h4>
          <Dropdown />
          {filteredChannels.map(channel => (
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
      );
    }
    else if (channels !== null) {
      return (
        <div>
          <h4 class="text-center text-light">New's Channels</h4>
          <Dropdown />
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
