import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import '../../public/css/background.css';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div className= "profile-container">
                <div className= "jumbotron">
                <h1 className = "skills-title">Ipsum</h1>
                <div className= "row skills-row">
                    <div className= "col-md-6 left-col">
                        <h5>Ispum</h5>
                        <h5>Dollar</h5>
                    </div>
                    <div className= "col-md-6 right-col">
                        <h5>Ispum</h5>
                        <h5>Dollar</h5>
                    </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Skills;