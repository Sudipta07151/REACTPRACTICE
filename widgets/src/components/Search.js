import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const searchWikiApi = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            });
            setSearchResult(data.query.search);
        }
        const timerId = setTimeout(() => {
            if (searchTerm) {
                searchWikiApi()
            }
        }, 400);
        return () => {
            clearTimeout(timerId);
        }
    }, [searchTerm]);
    const onSearchInput = (e) => {
        setSearchTerm(e.target.value);
    }
    const clearSearchField = (e) => {
        setSearchTerm('');
        e.preventDefault();
    }
    const renderedResult = searchResult.map((article) => {
        return (
            <div className="item" key={article.pageid}>
                <div className="content">
                    <div className="right floated content">
                        <a
                            className="ui button green compact"
                            href={`https://en.wikipedia.org?curid=${article.pageid}`}
                            target="_blank"
                        >GO</a>
                    </div>
                    <div className="header">
                        {article.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: article.snippet }}></span>
                </div>
            </div >
        );
    })

    return (
        <div id="SearchComponent">
            <form className="ui form">
                <div className="field">
                    <label htmlFor="Search" style={{ fontSize: '20px', fontFamily: 'cursive' }}>Search</label>
                    <input
                        type="text"
                        name="Search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={onSearchInput}
                    />
                    <button
                        className="ui right floated compact button inverted blue"
                        style={{ marginTop: '2px' }} onClick={clearSearchField}>CLEAR
                    </button>
                </div>
            </form>
            <div className="ui celled list" style={{ fontFamily: 'cursive', marginTop: '40px' }}>
                {searchTerm ? renderedResult : ''}
            </div>
        </div >
    )
}

export default Search;