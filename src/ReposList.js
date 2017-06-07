import React from 'react'

import PropTypes from 'prop-types';


const ReposList = (props) => {

    const repoList = props.repos.map((repo, index) => {
        return (
            <tr key={index}>
                <td>{repo.name}</td>
            </tr>
        )
    })


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {repoList}
                </tbody>
            </table>

        </div>
    )
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default ReposList;
