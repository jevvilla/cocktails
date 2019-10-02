import colors from '../../src/common/colors';

describe('colors', () => {
  test('should match snapshot', () => {
    expect(colors).toMatchSnapshot();
  });
});
