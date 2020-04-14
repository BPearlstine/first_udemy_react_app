// Import the React and ReactDOM libraries
// const React = require('react');  => CommonJS modules
// instead of ES2015
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click me';
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <br />
            <button style={{ backgroundColor: 'blue', color:'white' }}>
                {buttonText}
            </button>
        </div>);
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);