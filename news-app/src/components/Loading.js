import React from 'react';
import Loader from 'react-loader-spinner';
export default class Loading extends React.Component {
    render() {
     return(
      <Loader
         type="Triangle"
         color="#00BFFF"
         height="300"
         width="300"
      />
     );
    }
 }