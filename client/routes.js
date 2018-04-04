import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/skills" component={Skills}/>
                </Switch>
            </Router>
        );
    };
};

export default Routes;