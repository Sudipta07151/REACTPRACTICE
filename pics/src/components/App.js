import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import LoaderDisplay from './LoaderDisplay';


class App extends React.Component {
    state = { imagesFetched: [], isLoading: false };
    onSearchSubmit = async (term) => {
        //console.log(term);
        this.setState({ imagesFetched: [], isLoading: true })
        //take the result term passed as props from the SearchBar component and use axios to fetch data(image)
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        //  console.log(response.data.results);
        this.setState({ imagesFetched: response.data.results, isLoading: false })

    }

    render() {
        return (

            <div id="App" className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                {
                    this.state.isLoading ? <LoaderDisplay message="wait..." /> : null
                }
                <ImageList images={this.state.imagesFetched} flag={this.state.isLoading} />
            </div>
        );
    }
}


export default App;