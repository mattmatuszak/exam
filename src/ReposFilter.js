import React from 'react'

import PropTypes from 'prop-types';



const ReposFilter = (props) => {

    const languages = props.languages.map((val, index) => {
        return <option key={index} value={val}>{val}</option>
    })

    return (
        <div>
            <h2 className="text-center">{props.githubUser.login} repositories</h2>
            <p className="text-center">Filter repos by primary language</p>
            <select>
                {languages}
            </select>
        </div>
    )
}

ReposFilter.propTypes = {
    githubUser: PropTypes.object.isRequired
}

export default ReposFilter;
