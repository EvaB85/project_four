import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import { Root } from './Root';
import { Home } from './Home';
import { User } from './User';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'user'} component={User} />
        <Router path={'home'} compoent={Home} />
      </Router>
    )
  }
}

render (<App />, window.document.getElementById('app'));
