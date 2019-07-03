import React, { Component } from "react";
import {updateSearchQuery} from './Channel'
class SearchBar extends Component {
  constructor(props){
      super(props);
      this.state={
          query:null
      }
  }
  searchQuery(e){
      updateSearchQuery(e.target.value);
  }
  render() {
    return (
      <React.Fragment>
      <div class="container mb-3">
         <div class="input-group input-group-lg">
         <div class="input-group-btn mr-1">
            <button class="btn btn-default bg-light" type="submit"><i class="fas fa-2x fa fa-search"></i></button>
        </div>
            <input type="text" class="form-control bg-light" placeholder="Search" onChange={this.searchQuery}/>
        </div>
     </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
