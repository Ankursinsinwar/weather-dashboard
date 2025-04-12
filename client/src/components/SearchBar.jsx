import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="text" value={city} placeholder="Enter city name" onChange={(e) => setCity(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
            </>
    );
};

export default SearchBar;
