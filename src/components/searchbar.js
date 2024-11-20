import React, { useState } from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query); // Pass the query to the parent component or perform a search action
        } else {
            alert("Please enter a search term.");
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`${styles.form} form-control`}
            />
            <button className={`btn btn-outline-dark ${styles.searchBtn}`} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
