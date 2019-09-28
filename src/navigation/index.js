import { createStackNavigator, createAppContainer } from 'react-navigation';

import Overview from '../screens/Overview';
// import Details from '../screens/Details';

import * as routes from './routes';

const stackNavigator = createStackNavigator({
  [routes.OVERVIEW]: {
    screen: Overview,
  },
  // [routes.DETAILS]: {
  //   screen: Details,
  // },
});

export default createAppContainer(stackNavigator);
