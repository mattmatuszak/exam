import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className="gridContainer">
            <div className="row">
                <h1 className="small-8 columns">Github Viewer</h1>
                <div className="small-4 columns valign-middle text-right">
                    {
                        (props.showLinkToHome)
                        ? <Link to="/"><button className="tiny">Home</button></Link>
                        : null
                    }

                </div>
            </div>
            <hr/>
        </div>
    )
}

Header.propTypes = {
    showLinkToHome: PropTypes.bool.isRequired
}

export default Header;
