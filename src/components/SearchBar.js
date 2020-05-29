import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            term: '' 
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.runMeWhenUserSubmit(this.state.term);
    }

    onChangeValue = (e) => {
        this.setState({ term: e.target.value });
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onChangeValue} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
