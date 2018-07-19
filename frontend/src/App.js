import React, { Component } from 'react';

import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Router/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
