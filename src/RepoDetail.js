import React from 'react'


const RepoDetail = (props) => {
    return (
        <div>
            <h2>hello_dojo details</h2>
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
                        <td>32</td>
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RepoDetail;
