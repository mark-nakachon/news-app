import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
export function updateSearchQuery(query){
 this.setState({searchQuery:query});
}
class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = { ChannelData: null,searchQuery:null };
    updateSearchQuery = updateSearchQuery.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(
      `https://newsapi.org/v2/everything?sources=${id}&apiKey=0279b927613e40debd2a3f4264057868`
    )
      .then(response => response.json())
      .then(data => this.setState({ ChannelData: data.articles }));
  }
  componentWillUpdate(){
    /*  const { id } = this.props.match.params;
        fetch(
      `https://newsapi.org/v2/everything?sources=${id}&q=${this.state.searchQuery}&apiKey=0279b927613e40debd2a3f4264057868`
    )
      .then(response => response.json())
      .then(data => this.setState({ ChannelData: data.articles }));*/
    console.log(this.state);
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
                  <div class="card">
                    <img class="card-img-top" src={article.urlToImage} />
                    <div class="card-body">
                      <h5 class="card-title">{article.title}</h5>
                      <p class="card-text">{article.description}</p>
                      <a href={article.url} class="btn btn-primary">
                        Go somewhere
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
      return "Loading";
    }
  }
}

export default Channel;
