import React, {Component} from 'react'

import PropTypes from 'prop-types';

import ReposFilter from './ReposFilter'
import ReposList from './ReposList'

class Repos extends Component {

    state = {
        filterOption: 'All'
    }

    filterRepos = (filterOption) => {
        // console.log('Repos.filterRepos()', filterOption.target.value)
        this.setState({filterOption: filterOption.target.value})
    }

    render() {
        // console.log('Repos.render()', this.props)

        const languagesMap = new Map();
        const distinctLanguages = ['All'];
        this.props.gitHubUserRepos.forEach((repo) => {
            // console.log(repo.language)
            if (repo.language && !languagesMap.get(repo.language)) {
                // console.log('found')
                distinctLanguages.push(repo.language)
                languagesMap.set(repo.language, {})
            }
        })
        // console.log('Repos() distinctLanguages -->', distinctLanguages)

        let reposToDisplay = this.props.gitHubUserRepos;

        if (this.state.filterOption !== 'All') {
            reposToDisplay = this.props.gitHubUserRepos.filter((val) => {
                return (val.language === this.state.filterOption)
            })
        }


        return (
            <div>
                <ReposFilter githubUser={this.props.githubUser} languages={distinctLanguages} filterRepos={this.filterRepos} />
                <ReposList repos={reposToDisplay}/>
            </div>
        )
    }
}

Repos.propTypes = {
    githubUser: PropTypes.object.isRequired,
    gitHubUserRepos: PropTypes.array.isRequired
}

export default Repos;
