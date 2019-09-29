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
});
