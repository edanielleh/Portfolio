import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
            <div>
                <div className= "navbar navbar-expand-lg navbar-light bg-light">
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><h5>Home</h5> <span class="sr-only">(current)</span></a>
                        </li>
                     <li className="nav-item">
                            <a className="nav-link" href="#"><h5>Skills</h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><h5>Projects</h5></a>
                    </li>
                    </ul>
                  </div>
              </div>
          </nav>
        );
    };
};

export default Navbar;