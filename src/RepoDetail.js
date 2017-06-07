import React from 'react'





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



export default RepoDetail;
