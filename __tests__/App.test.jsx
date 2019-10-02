import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('App', () => {
  const tree = renderer.create(<App />);

  test('should match the snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
