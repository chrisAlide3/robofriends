import React from 'react';

// The SEARCHCHANGE property is the function passed from the THIS.STATE of the App application
const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search robots" 
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;