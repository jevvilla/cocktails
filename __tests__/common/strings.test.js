import strings from '../../src/common/strings';

describe('strings', () => {
  test('should match snapshot', () => {
    expect(strings).toMatchSnapshot();
  });
});
