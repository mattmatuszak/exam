import React, { Component } from 'react'

import PropTypes from 'prop-types';

import Repos from './Repos'

class RepoContent extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="row">
                        <div className="small-12">
                            <Repos githubUser={this.props.githubUser}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

RepoContent.propTypes = {
    githubUser: PropTypes.object.isRequired
}

export default RepoContent
