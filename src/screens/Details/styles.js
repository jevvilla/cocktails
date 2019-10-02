import { StyleSheet } from 'react-native';

import colors from '../../common/colors';
import styles from '../../common/styles';

export default StyleSheet.create({
  container: {
    ...styles.paddingVertical,
    ...styles.paddingHorizontal,
    backgroundColor: colors.background,
    flex: 1,
  },
  headerLeft: {
    ...styles.paddingHorizontal,
  },
  headerTitle: {
    ...styles.headerTitle,
  },
});
