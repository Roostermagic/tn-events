import React, { Component } from 'react';

import Router from './Router';
import { Header, Footer } from 'components';

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
