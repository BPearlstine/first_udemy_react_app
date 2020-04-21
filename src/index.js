// Import the React and ReactDOM libraries
// const React = require('react');  => CommonJS modules
// instead of ES2015
import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    // js version of __init__
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // always use setState to update this.state
                this.setState({ lat: position.coords.latitude})
            },
            (err) => console.log(err) 
        );   
    }

    // React says we have to define render
    // or your page won't... render
    render(){ 
        return <div> Latitude: {this.state.lat}</div>;
    }
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);