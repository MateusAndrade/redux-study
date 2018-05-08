import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render(){
    return(
      <button onClick={this.props.onClick} className="counter__button">{ this.props.label }</button>
    )
  }
}

export default Button;