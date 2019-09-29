import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Details extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi there! I am Details</Text>
      </View>
    );
  }
}

export default Details;
