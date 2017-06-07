import React from 'react'
import PropTypes from 'prop-types';

const RepoDetail = (props) => {
    return (
        <div>
            <h2>{props.repoDetails.name} details</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Stars</th>
                        <th>Forks</th>
                        <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.repoDetails.stargazers_count}</td>
                        <td>{props.repoDetails.forks_count}</td>
                        <td>{props.repoDetails.language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

RepoDetail.propTypes = {
    repoDetails: PropTypes.object.isRequired
}

export default RepoDetail;
