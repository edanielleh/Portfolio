import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
 // <img src= {'css/background.jpg'}/>

class Home extends React.Component {
    render() {
        return ( 
            <div className= "profile-container">
                <div className= "profile-text">
                    <h1>I'm Danielle Howard</h1>
                    <h5>An Aspiring Full Stack Developer</h5>
                    <h5>Graduate of Grace Hopper</h5>
                </div>
                <div className= "btn-row">
                    <button className = "btn btn-secondary btn-lg">GitHub</button>
                    <button className = "btn btn-secondary btn-lg">LinkedIn</button>
                </div>
            </div>
        );
    };
};

export default Home;