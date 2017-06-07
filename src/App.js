import React, {Component} from 'react';

import './App.css'

import axios from 'axios'

import Header from './Header'
import SearchForm from './SearchForm'
import Repos from './Repos'
import RepoDetail from './RepoDetail'

class App extends Component {

    state = {
          searched: false
        , githubUser: null
        , githubUserRepos: []
    }

    searchGithubUsers = (formInputs) => {
        console.log('App.searchGithubUsers() formInputs', formInputs);

        axios
            .get(`https://api.github.com/users/${formInputs.username}`)
            .then((response) => {
                console.log('App.searchGithubUsers() response', response.data);
                this.setState({githubUser: response.data, searched: true})
            })
            .catch((error) => {
                console.log('App.searchGithubUsers() response', error);
                this.setState({githubUser: null, searched: true})
            })

    }


    render() {
        return (
            <div className="App">

                <div className="row">
                    <Header />
                </div>
                <div className="gridContainer viewerContent">
                    <div className="row">
                        <div className="small-12">
                            <SearchForm
                                searchGithubUsers={this.searchGithubUsers}
                                githubUserFound={!(this.state.githubUser === null && this.state.searched)} />
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
