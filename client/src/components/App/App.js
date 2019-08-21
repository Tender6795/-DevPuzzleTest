import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFound from '../NotFound';
import VacationDayForm from '../VacationDayForm';


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={VacationDayForm}/>
            <Route component={NotFound}/>
          </Switch>
      </Router>
    );
  }
};


export default App;