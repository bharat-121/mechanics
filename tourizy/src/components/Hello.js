import React from 'react'
import ReactDOM from 'react-dom'

import '../App.css'
import Row1 from './Row1'
import Row2 from './Row2'
function Hello()
{
    return (
        <div className="container">
            <h1>One Place Many Services</h1>
            <Row1 />
            <Row2 />
        </div>
    );

}

export default Hello