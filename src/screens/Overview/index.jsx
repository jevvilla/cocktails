import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { debounce, isEmpty } from 'lodash';

import { navigationShape } from '../../common/propTypes';
import strings from '../../common/strings';
import colors from '../../common/colors';
import CocktailsCardList from './components/CocktailsCardList';

import styles from './styles';

class Overview extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const isSearching = navigation.getParam('isSearching');
    const setSearchingState = navigation.getParam('setSearchingState');
    const onChangeTextHandler = navigation.getParam('onChangeTextHandler');

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
          placeholder={strings.SEARCH_COCKTAIL_PLACEHOLDER}
          placeholderTextColor={colors.whiteOpacity}
          style={styles.searchField}
          onChangeText={onChangeTextHandler}
        />
      ) : (
        <TouchableOpacity onPress={setSearchingState}>
          <Text style={styles.headerTitle}>{strings.OVERVIEW_HEADER_TITLE}</Text>
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    const { navigation } = props;

    navigation.setParams({
      setSearchingState: this.setSearchingState,
      onChangeTextHandler: this.onChangeTextHandler,
    });
    this.state = {
      drinks: [],
      filteredDrinks: [],
      isSearching: false,
      textToSearch: null,
    };
  }

  componentDidMount() {
    this.fetchCocktails();
  }

  onChangeTextHandler = debounce(textToSearch => {
    this.setState({ textToSearch }, () => {
      this.searchCocktails(textToSearch);
    });
  }, 600);

  searchCocktails = textToSearch => {
    const { drinks } = this.state;

    if (!isEmpty(textToSearch)) {
      const filteredDrinks = drinks.filter(drink => {
        return drink.strDrink.startsWith(textToSearch);
      });

      this.setState({ filteredDrinks });
    }
  };

  setSearchingState = () => {
    const { navigation } = this.props;

    this.setState(prevProps => {
      const isSearching = !prevProps.isSearching;
      navigation.setParams({
        isSearching,
      });

      return { isSearching, textToSearch: '' };
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
    const { drinks, filteredDrinks, textToSearch } = this.state;
    const { navigation } = this.props;
    const data = !isEmpty(textToSearch) ? filteredDrinks : drinks;

    return (
      <View style={styles.container}>
        <CocktailsCardList data={data} navigation={navigation} />
      </View>
    );
  }
}

Overview.propTypes = {
  navigation: navigationShape.isRequired,
};

export default Overview;
