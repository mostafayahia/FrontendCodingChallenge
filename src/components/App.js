import React, { Component } from 'react';
import Pagination from './Pagination';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="center">Top Starred Repos in the last 30 days</h1>
        <Pagination />
      </div>
    )
  }
}

export default App;
