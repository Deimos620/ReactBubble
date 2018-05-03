import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import BubbleChart from './containers/bubble/bubbleChart';
import store, { history, persistor } from './store';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <div>
              <Switch>
                <Route exact path='/' component={BubbleChart} />
              </Switch>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
