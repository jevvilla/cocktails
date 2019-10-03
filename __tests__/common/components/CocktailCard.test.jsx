import React from 'react';
import renderer from 'react-test-renderer';

import CocktailCard from '../../../src/common/components/CocktailCard';

import { filteredMeasures } from '../../../__mocks__';

const props = {
  uri: 'https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg',
  title: '9 1/2 Weeks',
  onPress: jest.fn(),
  ingredients: filteredMeasures,
};

describe('CocktailCard', () => {
  const { uri, title, onPress, ingredients } = props;

  const tree = renderer.create(
    <CocktailCard uri={uri} title={title} onPress={onPress} ingredients={ingredients} />,
  );

  test('should render the time correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
