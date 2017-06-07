import React, {Component} from 'react'

class SearchForm extends Component {

    render() {
        return (
            <div>
                <div data-notification className="notification-box alert">
                    Unknown username!
                    <a href="#" className="close">×</a>
                </div>
                <p>Search repositories by username</p>
                <form>
                    <input type='text' placeholder='username'/>
                    <button type='submit' className="tiny expand">Search</button>
                </form>
                <hr/>
            </div>
        )
    }
}

export default SearchForm
