import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CocktailDetailsCard from './components/CocktailDetailsCard';
import { navigationShape } from '../../common/propTypes';

import styles from './styles';
import colors from '../../common/colors';

class Details extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack(null)}>
        <Icon name="ios-arrow-round-back" size={35} color={colors.white} />
      </TouchableOpacity>
    ),
    headerTitle: <Text style={styles.headerTitle}>{navigation.getParam('headerTitle')}</Text>,
  });

  render() {
    const { navigation } = this.props;
    const { uri, measures, instructions } = navigation.state.params;

    return (
      <View style={styles.container}>
        <CocktailDetailsCard uri={uri} measures={measures} instructions={instructions} />
      </View>
    );
  }
}

Details.propTypes = {
  navigation: navigationShape.isRequired,
};

export default Details;
