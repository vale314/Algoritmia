import React, {Component} from 'react';
import Header from './Components/header'
import Body from './Components/body'

import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
