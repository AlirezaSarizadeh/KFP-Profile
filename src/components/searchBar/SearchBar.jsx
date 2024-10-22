import React, { useState } from 'react'
import './searchbar.css'
import searchIco from '../../assets/images/search-ico.png'
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {

    // Enter Key Event

    const [query, setQuery] = useState('');
    const navigate = useNavigate();


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission behavior  
            navigate(`/search/${query}`); // Navigate to results page with the query  
        }
    };

    // SEARCH TOGGLE
    const [isClassActive, setIsClassActive] = useState(false);
    const searchClassName = `input-group page-search-container rounded d-flex align-items-center justify-content-center gap-2 ${isClassActive ? ' search-Active' : ''}`
    const handleSearchToggle = () => {
        setIsClassActive(!isClassActive)
    }


    return (
        <div className="search-container ms-auto me-lg-5 pe-3">
            <div
                className={isClassActive ? searchClassName : 'input-group page-search-container rounded d-flex align-items-center justify-content-center gap-2'} >
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    type="search" className="form-control search-input search-input-v2"
                    placeholder="type..." aria-label="Search" aria-describedby="search-addon" />
                <span className="search-btn" id="search-addon">
                    <img src={searchIco} alt="" onClick={handleSearchToggle} />
                </span>
            </div>
        </div>
    )
}

export default SearchBar
