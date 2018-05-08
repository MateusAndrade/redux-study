import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';

class App extends Component {   
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
  }
 
  add = () => {
    this.setState({ counter: this.state.counter+1 });
  }

  desc = () => {
    this.setState({ counter: this.state.counter-1 });
  } 

  render() {
    return (
      <div className="container col">
        <h1>{ this.state.counter }</h1>
  
        <div className="col align-bottom">
          <Button onClick={this.add} label="Adicionar" />        
          <Button onClick={this.desc} label="Diminuir" />        
        </div>
    
      </div>
    );
  }
}

export default App;
