import React, { Component } from 'react';
import Quicksearch from './Quicksearch'
import Hello from './Hello'
import Navbar from './Navbar'
import '../App.css'
class MainPage extends Component {
    render() {
        return (
                <div>
                    <header>
                        <Navbar />
                    </header>
                    <div>
                        <Hello />
                    </div>
                    <div>
                        <Quicksearch />
                    </div>
                </div>
        );
    }
}

export default MainPage;
