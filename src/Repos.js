import React from 'react'

import ReposFilter from './ReposFilter'
import ReposList from './ReposList'

const Repos = (props) => {
    return (
        <div>
            <ReposFilter />
            <ReposList />
        </div>
    )
}

export default Repos;
