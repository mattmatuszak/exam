import React, { Component } from 'react';

import './App.css'

import SearchForm from './SearchForm'
import Repos from './Repos'
import RepoDetail from './RepoDetail'

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="row">
              <h1>Github Viewer</h1>
              <hr />
          </div>
          <div className="row">
              <SearchForm />
          </div>
          <div className="row">
              <Repos />
          </div>
          <div className="row">
              <RepoDetail />
          </div>

      </div>
    );
  }
}

export default App;
