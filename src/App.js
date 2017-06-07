import React, {Component} from 'react';

import './App.css'

import Header from './Header'
import SearchForm from './SearchForm'
import Repos from './Repos'
import RepoDetail from './RepoDetail'

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="row">
                    <Header/>
                </div>
                <div className="gridContainer viewerContent">
                    <div className="row">
                        <div className="small-12">
                            <SearchForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="small-12">
                                <Repos/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="small-12">
                                <RepoDetail/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
