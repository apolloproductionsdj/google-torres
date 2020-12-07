import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../pages/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Search from './Search';
import './SearchPage.css';

function SearchPage() {
    const [{ term }] = useStateValue();
    const { data } = useGoogleSearch(term)

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                </div>
                <div className="searchPage__optionsLeft">

                </div>

                <div className="searchPage__optionsRight">

                </div>
            </div>

            <div className="searchPage__results">
            </div>
        </div>
    )
}

export default SearchPage;
