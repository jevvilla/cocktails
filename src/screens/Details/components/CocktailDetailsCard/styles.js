import { StyleSheet } from 'react-native';

import colors from '../../../../common/colors';
import styles from '../../../../common/styles';

export default StyleSheet.create({
  container: {
    ...styles.borderRadius,
    ...styles.padding,
    backgroundColor: colors.white,
    height: 650,
  },
  imageContainer: {
    flex: 1.3,
  },
  descriptionContainer: {
    ...styles.paddingVertical,
    flex: 1,
  },
  image: {
    flex: 1,
  },
  measures: {
    color: colors.black,
    fontSize: 16,
    opacity: 0.4,
  },
  howTo: {
    ...styles.paddingVertical,
  },
});
