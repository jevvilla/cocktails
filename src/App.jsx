import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';

// import Overview from './screens/Overview';
import Router from './navigation';

import colors from './common/colors';

class App extends PureComponent {
  render() {
    return (
      <>
        <StatusBar backgroundColor={colors.background} barStyle="light-content" />
        <Router />
      </>
    );
  }
}

export default App;
