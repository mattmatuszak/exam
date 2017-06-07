import React from 'react'
import { Link } from 'react-router-dom'

import ReposFilter from './ReposFilter'
import ReposList from './ReposList'

const Header = (props) => {
    return (
        <div className="gridContainer">
            <div className="row">
                <h1 className="small-8 columns">Github Viewer</h1>
                <div className="small-4 columns valign-middle text-right">
                    <Link to="/"><button className="tiny">Home</button></Link>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Header;
