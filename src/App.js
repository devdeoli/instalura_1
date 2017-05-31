import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import Timeline from './components/TimeLine';


class App extends Component {
  render() {
    return (
      <div id="root">
      <div className="main">
        <Header/>
        <Timeline login={this.props.params.login}/>
      </div>
    </div>
    );
  }
}

export default App;
