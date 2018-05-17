import React, { Component } from 'react';

import CardList from '../components/CardList.js';
// we need put robots in {} because Robots.js doesn't export default
// we changed robots to be read from an external file on the web. see componentDidMount
// import { robots } from './Robots.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';

// in order to have the Searchbox App communicate with the CardList App we need to define a Class
// The state definition below is nested in the Class App Extend with a constructor function on this. object 
// const state = {
//     robots: robots,
//     searchfield = ''
// } 

// The COMPONENT was destructured in IMPORT REACT statment at the top of APP
class App extends Component {
    // Defining the state (see above)
    constructor() {
        // defining THIS enviroment with SUPER function
        super()
        this.state = {
            // We can define an empty robots Object and execute it on the React componentDidMount event
            robots: [],
            // robots: robots,
            searchfield: '' 
        }
    }

    componentDidMount() {
        // This when reading the file through import
        // this.setState({ robots: robots })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState( {robots: users}));
    }
    // Defining the SearchBox onChange event as new function (note the function name can be anything
    // it doesn't define the action)

    onSearchChange = (event) => {
        
        this.setState( {searchfield: event.target.value} )
        // We need to define the filtered robot in the render function and pass it to the CardList App
        // const filteredRobots = this.state.robots.filter(robots => {
        //     return (
        //         robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        //     )
        }

    

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })

        return(
            <div className="tc">
                <h1>Robofriends</h1>
                {/* <SearchBox/> */}
                {/* Now we can pass the property searchChange from the THIS.STATE function */}
                <SearchBox searchChange={this.onSearchChange}/>
                {/* Now we access the robots component through the defined THIS.STATE
                and not from IMPORT{ ROBOTS } from top of APP*/}
                <Scroll>
                    <CardList robots={filteredRobots}/>
                    {/* <CardList robots={robots}/> */}
                </Scroll>
        </div>
        );
    }
}

// This is the working App without STATE settings for Searchbox and CardList communication
// const App = () => {
//     return (
//         <div className="tc">
//             <h1>Robofriends</h1>
//             <SearchBox/>
//             <CardList robots={robots}/>
//         </div>
//     );
// }

export default App;