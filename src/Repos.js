import React from 'react'

import PropTypes from 'prop-types';

import ReposFilter from './ReposFilter'
import ReposList from './ReposList'

const Repos = (props) => {

    const languagesMap = new Map();
    const distinctLanguages = ['All'];
    props.gitHubUserRepos.forEach((repo) => {
        console.log(repo.language)
        if (repo.language && !languagesMap.get(repo.language)) {
            console.log('found')
            distinctLanguages.push(repo.language)
            languagesMap.set(repo.language, {})
        }
    })
    console.log('Repos() distinctLanguages -->', distinctLanguages)

    return (
        <div>
            <ReposFilter githubUser={props.githubUser} languages={distinctLanguages} />
            <ReposList repos={props.gitHubUserRepos} />
        </div>
    )
}

Repos.propTypes = {
    githubUser: PropTypes.object.isRequired
    , gitHubUserRepos: PropTypes.array.isRequired
}

export default Repos;
