import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import './App.css'

import axios from 'axios'

import Header from './Header'
import SearchForm from './SearchForm'
import RepoContent from './RepoContent'
import RepoDetail from './RepoDetail'

class App extends Component {

    state = {
        initialLoaded: true,
        searching: false,
        searched: false,
        githubUser: null,
        githubUserRepos: []
    }

    searchGithubUsers = (formInputs) => {
        // console.log('App.searchGithubUsers() formInputs', formInputs);

        this.setState({searching: true})

        const githubUserDetails = axios.get(`https://api.github.com/users/${formInputs.username}`)
        const githubUserRepos = axios.get(`https://api.github.com/users/${formInputs.username}/repos`)

        Promise.all([githubUserDetails, githubUserRepos]).then(githubResponses => {
            this.setState({githubUser: githubResponses[0].data, githubUserRepos: githubResponses[1].data, searched: true, searching: false, initialLoaded: false})
        }).catch(error => {
            this.setState({githubUser: null, githubUserRepos: [], searched: true, searching: false, initialLoaded: false})
        })

    }

    render() {
        return (
            <Router>

                <div className="App">
                    {
                        (this.state.githubUser === null)
                        ? <Redirect to="/" />
                        : null
                    }

                    <Route path="/repos/:repoName" render={(props) => {

                        if (this.state.githubUser === null)
                            return null;

                        const repoToDisplay = this.state.githubUserRepos.filter((val) => {
                            return (props.match.params.repoName === val.name)
                        })
                        // console.log('App.render()', repoToDisplay);

                        return (
                            <div>
                                <div className="row">
                                    <Header showLinkToHome={true} />
                                </div>
                                <div className="gridContainer">
                                    <div className="row">
                                        <div className="small-12 columns">
                                            <RepoDetail repoDetails={repoToDisplay[0]}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>
                    <Route exact path="/" render={(props) => {
                        return(
                            <div>
                                <div className="row">
                                    <Header showLinkToHome={false} />
                                </div>
                                <div className="gridContainer viewerContent">
                                    <div className="row">
                                        <div className="small-12">
                                            <SearchForm searchGithubUsers={this.searchGithubUsers} githubUserFound={!(this.state.githubUser === null && this.state.searched)}/>
                                        </div>
                                    </div>
                                    {(this.state.searching)
                                        ? <span className="loading-indicator small"></span>
                                        : (this.state.searched && this.state.githubUser !== null)
                                            ? <RepoContent githubUser={this.state.githubUser} gitHubUserRepos={this.state.githubUserRepos}/>
                                            : null}
                                </div>
                        </div>
                        )
                    }} />


                </div>
            </Router>
        );
    }
}

export default App;
