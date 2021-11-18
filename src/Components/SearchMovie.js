import React, { useState } from 'react';

function SearchMovie() {

    const [query, setQuery] = useState(' ');

    const async (e) => {
        e.preventDefault();

        const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="


}

    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name: </label>
            <input className="input" type="text" name="query" placeholder="Search.."/>
            <button className="button">Search</button>
        </form>
    )
    }

export default SearchMovie;