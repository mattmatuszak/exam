import React from 'react'


const ReposFilter = (props) => {
    return (
        <div>
            <h2 className="text-center">meadch's repositories</h2>
            <p className="text-center">Filter repos by primary language</p>
            <select>
                <option value="all">All</option>
                <option value="all">JavaScript</option>
                <option value="all">Ruby</option>
            </select>
        </div>
    )
}

export default ReposFilter;
