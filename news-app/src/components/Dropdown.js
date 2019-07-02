import React from 'react';
import {filterByCategory} from './Channels';
export default class Dropdown extends React.Component {

    constructor(props){
        super(props);
        this.category = this.category.bind(this);
    }
    category(e){
        e.preventDefault();
        console.log(e.target.value);
        filterByCategory(e.target.value);
    }
    render() {
     return(
         <select class="browser-default custom-select custom-select-lg mb-3" onChange={this.category}>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
        </select>
     );
    }
 }