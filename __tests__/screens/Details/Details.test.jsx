import React from 'react';
import renderer from 'react-test-renderer';

import Details from '../../../src/screens/Details';
import { measuresAndIngredients } from '../../../__mocks__';

const params = {
  uri: 'headerTitle',
  measures: measuresAndIngredients,
  instructions: 'instructions',
};

const navigation = {
  getParam: jest.fn(key => params[key]),
  goBack: jest.fn(),
  navigate: jest.fn(),
  state: {
    params,
  },
  setParams: jest.fn(),
};

describe('Details', () => {
  const tree = renderer.create(<Details navigation={navigation} />);

  test('should match the snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe('navigationOptions', () => {
    const navigationOptions = Details.navigationOptions({ navigation });

    test('navigationOptions match snapshot', () => {
      expect(navigationOptions).toMatchSnapshot();
    });

    test('headerLeft IconButton onPress', () => {
      renderer.create(navigationOptions.headerLeft).root.props.onPress();

      expect(navigation.goBack).toBeCalledWith(null);
    });
  });
});
