import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/state/reducers';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    );
  }
}

export default App;
