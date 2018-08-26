import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MoviesList from './src/scenes/movies-list';
import reducers from './src/state/reducers';
import sagas from './src/saga';
import { createStackNavigator } from 'react-navigation';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const Navigation = createStackNavigator({
  MoviesList: {
    screen: MoviesList,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
