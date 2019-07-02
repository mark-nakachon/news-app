import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import Loading from './Loading';
export function updateSearchQuery(query){
 this.setState({searchQuery:query});
}
class Channel extends Component {
  _ismounted = false;
  constructor(props) {
    super(props);
    this.state = { ChannelData: null,searchQuery:null };
    updateSearchQuery = updateSearchQuery.bind(this);
  }
    myStyle = {
        cardhover:{
            backgroundColor:"red"
        }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this._ismounted = true;
    fetch(
      `https://newsapi.org/v2/everything?sources=${id}&pageSize=100&apiKey=0279b927613e40debd2a3f4264057868`
    )
      .then(response => response.json())
      .then(data =>
        {
        if(this._ismounted){
        this.setState({ ChannelData: data.articles })
        }});
  }
  componentDidUpdate(prevProps,prevState){
    const { id } = this.props.match.params;
    this._ismounted = true;
      if(prevState.searchQuery!==this.state.searchQuery){
        fetch(
      `https://newsapi.org/v2/everything?q=${this.state.searchQuery}&sources=${id}&apiKey=0279b927613e40debd2a3f4264057868`
    )
      .then(response => response.json())
      .then(data =>{if(this._ismounted){this.setState({ ChannelData: data.articles })}});
     // console.log(this.state);
        }
  }
  componentWillUnmount(){
    this._ismounted = false
  }

  render() {
    const { ChannelData,searchQuery } = this.state;
    console.log(ChannelData,searchQuery);
    if (ChannelData) {
      return (
        <React.Fragment>
        <SearchBar/>
          <div class="container">
            <div class="row">
              {ChannelData.map(article => (
                <div class="col-md-4">
                  <div class="card card-hover h-100 bg-dark rounded p-1" style={{myStyle}}>
                    <img class="card-img-top" src={article.urlToImage} />
                    <div class="card-body bg-light">
                      <h5 class="card-title text-dark">{article.title}</h5>
                      <p class="card-text text-dark">{article.description}</p>
                      <a href={article.url} class="btn btn-dark btn-block">
                        Visit article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (<div class="text-center"><Loading/></div>);
    }
  }
}

export default Channel;
