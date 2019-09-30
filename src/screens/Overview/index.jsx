import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { navigationShape } from '../../common/propTypes';
import strings from '../../common/strings';
import colors from '../../common/colors';
import CocktailsCardList from './components/CocktailsCardList';

import styles from './styles';

class Overview extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const isSearching = navigation.getParam('isSearching');
    const setSearchingState = navigation.getParam('setSearchingState');

    return {
      headerRight: isSearching ? (
        <TouchableOpacity style={styles.headerRight}>
          <Icon
            name="ios-close-circle-outline"
            size={35}
            color={colors.white}
            onPress={setSearchingState}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.headerRight}>
          <Icon name="ios-search" size={35} color={colors.white} onPress={setSearchingState} />
        </TouchableOpacity>
      ),
      headerTitle: isSearching ? (
        <TextInput
          autoCapitalize="none"
          placeholder={strings.SEARCH_COCKTAIL_PLACEHOLDER}
          placeholderTextColor={colors.whiteOpacity}
          style={styles.searchField}
        />
      ) : (
        <Text style={styles.headerTitle}>{strings.OVERVIEW_HEADER_TITLE}</Text>
      ),
    };
  };

  constructor(props) {
    super(props);
    const { navigation } = props;

    navigation.setParams({
      setSearchingState: this.setSearchingState,
    });
    this.state = {
      drinks: [],
      isSearching: false,
    };
  }

  componentDidMount() {
    this.fetchCocktails();
  }

  setSearchingState = () => {
    const { navigation } = this.props;

    this.setState(prevProps => {
      const isSearching = !prevProps.isSearching;
      navigation.setParams({
        isSearching,
      });

      return { isSearching };
    });
  };

  fetchCocktails = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
    );

    if (response.ok) {
      const { drinks } = await response.json();
      this.setState({ drinks });
    }
  };

  render() {
    const { drinks } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <CocktailsCardList data={drinks} navigation={navigation} />
      </View>
    );
  }
}

Overview.propTypes = {
  navigation: navigationShape.isRequired,
};

export default Overview;
