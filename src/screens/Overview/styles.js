import { StyleSheet } from 'react-native';

import colors from '../../common/colors';
import styles from '../../common/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headerTitle: {
    ...styles.headerTitle,
  },
  headerRight: {
    ...styles.paddingHorizontal,
  },
  searchField: {
    width: 280,
    height: 40,
    fontSize: 18,
    color: colors.white,
    backgroundColor: colors.background,
  },
});
