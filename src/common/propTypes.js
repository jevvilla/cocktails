import PropTypes from 'prop-types';

export const navigationShape = PropTypes.shape({
  navigate: PropTypes.func,
  setParams: PropTypes.func,
  goBack: PropTypes.func,
});

export const cocktailsReducerShape = PropTypes.shape({
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  cocktails: PropTypes.oneOfType({
    drinks: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
  }),
});
