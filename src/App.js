import React from 'react';

import CardList from './CardList.js';
// we need put robots in {} because Robots.js doesn't export default
import { robots } from './Robots.js';
import SearchBox from './SearchBox.js';


const App = () => {
    return (
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    );
}

export default App;