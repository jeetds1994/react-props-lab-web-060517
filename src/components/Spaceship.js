// Code The Spaceship Component Here

import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['black', 'red']

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <p>name {this.props.name}</p>
        <p>speed {this.props.speed}</p>
        <p>hasRockets {this.props.hasRockets}</p>
        <p>colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};



export default Spaceship;

//
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
