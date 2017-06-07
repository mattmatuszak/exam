import React, {Component} from 'react'


class SearchForm extends Component {

    render() {
        return (
            <div>
                <p>Search repositories by username</p>
                <form>
                    <input type='text' placeholder='username' />
                    <button type='submit' className="tiny">Search</button>
                </form>
                <hr />
            </div>
        )
    }
}

export default SearchForm
