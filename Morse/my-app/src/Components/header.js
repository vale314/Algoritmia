import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component{
  render(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Universidad De Guadalajara
        </h1>
        <h3>
            Centro Universitario De Ciencias Exactas E Ingenierias  
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </header>
    );
  }
}

export default Header;
