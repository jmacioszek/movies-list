import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/state/reducers';
import sagas from './src/saga';
import { createStackNavigator } from 'react-navigation';
import createSagaMiddleware from 'redux-saga';

import MoviesList from './src/scenes/movies-list';
import Comments from './src/scenes/comments';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const Navigation = createStackNavigator(
  {
    MoviesList: MoviesList,
    Comments: Comments,
  },
  {
    initialRouteName: 'MoviesList',
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
  },
);

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
