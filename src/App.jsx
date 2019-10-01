import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Router from './navigation';
import store from './store';

import colors from './common/colors';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Router />
      </Provider>
    );
  }
}

export default App;
