import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page'
import BannerContainer from './components/BannerContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BannerContainer />
          <Page />
        </header>
      </div>
    );
  }
}

export default App;
