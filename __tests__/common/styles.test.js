import styles, { STANDARD_SPACING } from '../../src/common/styles';

describe('styles', () => {
  test('should match snapshot', () => {
    expect(styles).toMatchSnapshot();
  });

  test('STANDARD_SPACING should match snapshot', () => {
    expect(STANDARD_SPACING).toMatchSnapshot();
  });
});
