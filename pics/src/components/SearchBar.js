import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    // onInputClick() {
    //     console.log('click event');
    // }

    onFormSubmit=(e)=> {
        e.preventDefault();
        console.log(this.state.term);
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <h3><label>Image Search</label></h3>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => {
                                this.setState({ term: e.target.value })
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;