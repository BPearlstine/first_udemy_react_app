// Import the React and ReactDOM libraries
// const React = require('react');  => CommonJS modules
// instead of ES2015
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);