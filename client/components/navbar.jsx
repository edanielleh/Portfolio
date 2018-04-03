import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
            <div>
                <div className= "navbar navbar-expand-lg navbar-light bg-dark">
                    <ul className= "nav navbar-nav">
                        <li>
                            <a className= "nav-link" href= "#"><h5>Home</h5></a>
                        </li>
                        <li>
                            <a className= "nav-link" href= "#"><h5>Skills</h5></a>
                        </li>
                        <li>
                            <a className= "nav-link" href= "#"><h5>Projects</h5></a>
                       </li>
                    </ul>
                  </div>
              </div>
          </nav>
        );
    };
};

export default Navbar;