import { createStackNavigator, createAppContainer } from 'react-navigation';

import Overview from '../screens/Overview';
import Details from '../screens/Details';

import * as routes from './routes';
import styles from '../common/styles';

const stackNavigator = createStackNavigator(
  {
    [routes.OVERVIEW]: {
      screen: Overview,
    },
    [routes.DETAILS]: {
      screen: Details,
    },
  },
  {
    initialRouteName: routes.OVERVIEW,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: styles.defaultHeader,
    },
  },
);

export default createAppContainer(stackNavigator);
