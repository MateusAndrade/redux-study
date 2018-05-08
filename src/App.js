import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';

class App extends Component { 
  
  state = {
    counter: 0,
  };

  render() {
    return (
      <div className="container col">
        <h1>5</h1>
  
        <div className="col">
          <Button label="Adicionar" />        
          <Button label="Diminuir" />        
        </div>
    
      </div>
    );
  }
}

export default App;
