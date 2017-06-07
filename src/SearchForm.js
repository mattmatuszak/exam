import React, {Component} from 'react'
import PropTypes from 'prop-types';

class SearchForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    formChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()
        this.props.searchGithubUsers(this.state)
    }

    render() {
        return (
            <div>
                {
                    (!this.props.githubUserFound)
                    ? (
                        <div data-notification className="notification-box alert">
                            Unknown username!
                            <a href="#" className="close">×</a>
                        </div>
                    )
                    : null
                }
                <p>Search repositories by username</p>
                <form onSubmit={this.submit}>
                    <input type='text' placeholder='username' name="username" onChange={this.formChange} />
                    <button type='submit' className="tiny expand" disabled={(this.state.username === '')}>Search</button>
                </form>
                <hr/>
            </div>
        )
    }
}

SearchForm.propTypes = {
    searchGithubUsers: PropTypes.func.isRequired
    , githubUserFound: PropTypes.bool.isRequired
}

export default SearchForm
