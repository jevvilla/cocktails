import colors from './colors';

export const STANDARD_SPACING = 16;
export const STANDARD_RADIUS = 8;

export const DOUBLE_SPACING = STANDARD_SPACING * 2;

export default {
  /* Paddings */
  padding: {
    padding: STANDARD_SPACING,
  },

  paddingHorizontal: {
    paddingHorizontal: STANDARD_SPACING,
  },

  paddingVertical: {
    paddingVertical: STANDARD_SPACING,
  },

  paddingRightHalf: {
    paddingRight: STANDARD_SPACING,
  },

  /* Margins */
  marginBottom: {
    marginBottom: STANDARD_SPACING,
  },

  /* Border Radius */
  borderRadius: {
    borderRadius: STANDARD_RADIUS,
  },

  /* Shadow */
  shadow: value => ({
    elevation: value,
    shadowOpacity: 0.2,
    shadowRadius: value,
    shadowOffset: { width: 0, height: 0 },
  }),

  /* Header */
  defaultHeader: {
    borderBottomWidth: 0,
    backgroundColor: colors.background,
    elevation: 0,
    height: 64,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 22,
    opacity: 0.8,
  },
};
