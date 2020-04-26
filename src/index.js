// Import the React and ReactDOM libraries
// const React = require('react');  => CommonJS modules
// instead of ES2015
import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {

    // sweet sweet class attributes
    state = { lat: null, errorMessage: '' };

    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    // Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint,
    // this is a good place to instantiate the network request.
    // https://reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // always use setState to update this.state
                this.setState({ lat: position.coords.latitude})
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );  
    }

    // React says we have to define render
    // or your page won't... render
    render(){ 
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <div>latitude: {this.state.lat}</div>;
        } 

        return <div>Loading!</div>;
    }
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);