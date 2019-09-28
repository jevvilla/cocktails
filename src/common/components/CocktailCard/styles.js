import { StyleSheet } from 'react-native';

import colors from '../../colors';
import styles from '../../styles';

export default StyleSheet.create({
  container: {
    ...styles.borderRadius,
    ...styles.padding,
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 180,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    ...styles.paddingRight,
    flex: 1,
  },
  image: {
    ...styles.borderRadius,
    width: 150,
  },
  touchable: {
    ...styles.borderRadius,
    ...styles.marginBottom,
    ...styles.shadow(4),
  },
  title: {
    ...styles.marginBottom,
    color: colors.black,
    fontSize: 22,
    opacity: 0.6,
  },
  ingredient: {
    color: colors.black,
    fontSize: 16,
    opacity: 0.4,
  },
});
