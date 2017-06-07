import React from 'react'

import PropTypes from 'prop-types';

import ReposFilter from './ReposFilter'
import ReposList from './ReposList'

const Repos = (props) => {
    return (
        <div>
            <ReposFilter githubUser={props.githubUser} />
            <ReposList />
        </div>
    )
}

Repos.propTypes = {
    githubUser: PropTypes.object.isRequired
}

export default Repos;
