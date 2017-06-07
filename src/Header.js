import React from 'react'

import ReposFilter from './ReposFilter'
import ReposList from './ReposList'

const Header = (props) => {
    return (
        <div className="gridContainer">
            <div className="row">
                <h1 className="small-8 columns">Github Viewer</h1>
                <div className="small-4 columns valign-middle text-right">
                    <button className="tiny">Home</button>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Header;
