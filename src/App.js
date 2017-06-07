import React, {Component} from 'react';

import './App.css'

import axios from 'axios'

import Header from './Header'
import SearchForm from './SearchForm'
import RepoContent from './RepoContent'
import RepoDetail from './RepoDetail'


class App extends Component {

    state = {
          searching: false
        , searched: false
        , githubUser: null
        , githubUserRepos: []
    }

    searchGithubUsers = (formInputs) => {
        console.log('App.searchGithubUsers() formInputs', formInputs);

        this.setState({searching: true})


        const githubUserDetails = axios.get(`https://api.github.com/users/${formInputs.username}`)
        const githubUserRepos = axios.get(`https://api.github.com/users/${formInputs.username}/repos`)

        Promise
            .all([githubUserDetails, githubUserRepos])
            .then(githubResponses => {
                this.setState({
                    githubUser: githubResponses[0].data
                    , githubUserRepos: githubResponses[1].data
                    , searched: true
                    , searching: false
                })
            })
            .catch(error => {
                this.setState({githubUser: null, githubUserRepos:[], searched: true, searching: false})
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
                    {
                        (this.state.searching)
                        ? <span className="loading-indicator small"></span>
                        : (this.state.searched && this.state.githubUser !== null)
                            ? <RepoContent githubUser={this.state.githubUser} gitHubUserRepos={this.state.githubUserRepos} />
                            : null
                    }
                    {/* <div className="row">
                        <div className="row">
                            <div className="small-12">
                                <RepoDetail/>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        );
    }
}

export default App;
