import React from 'react'

import PropTypes from 'prop-types';



const ReposFilter = (props) => {
    return (
        <div>
            <h2 className="text-center">{props.githubUser.login} repositories</h2>
            <p className="text-center">Filter repos by primary language</p>
            <select>
                <option value="all">All</option>
                <option value="all">JavaScript</option>
                <option value="all">Ruby</option>
            </select>
        </div>
    )
}

ReposFilter.propTypes = {
    githubUser: PropTypes.object.isRequired
}

export default ReposFilter;
