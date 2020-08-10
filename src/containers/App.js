import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
// import {robots} from './robots.js';
import Scroll from '../components/Scroll.js';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
        robots : [],
        searchField : ''    
        }
    }

    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}));
    }




    OnsearchChange =  (event) => {
        this.setState({ searchField : event.target.value})
    }

     render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
            return (
            <div  className='tc'>
                <h1 className= 'f1'>ROBOFRIENDS</h1>
                <Searchbox searchChange= {this.OnsearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>  
             );
        }
}

export default App;