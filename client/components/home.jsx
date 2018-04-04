import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import '../../public/css/background.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div className= "profile-container">
            <div className= "jumbotron">
                <div className= "profile-text">
                    <h1>I'm Danielle Howard</h1>
                    <h5>An Aspiring Full Stack Developer</h5>
                    <h5>Graduate of Grace Hopper</h5>
                </div>
                <div className= "btn-row">
                    <a href= "https://github.com/edanielleh" className = "btn btn-secondary btn-lg">GitHub</a>
                    <a href= "https://www.linkedin.com/in/danielle-howard-tech/" className = "btn btn-secondary btn-lg">LinkedIn</a>
                </div>
                </div>
            </div>
        );
    };
};

export default Home;