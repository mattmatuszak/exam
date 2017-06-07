import React, { Component } from 'react'

import Repos from './Repos'

class RepoContent extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="row">
                        <div className="small-12">
                            <Repos/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RepoContent
