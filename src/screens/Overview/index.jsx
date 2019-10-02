import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { debounce, isEmpty } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { navigationShape, cocktailsReducerShape } from '../../common/propTypes';
import strings from '../../common/strings';
import colors from '../../common/colors';
import CocktailsCardList from './components/CocktailsCardList';
import * as cocktailsActions from '../../actions/cocktails';

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
    const { cocktailsReducer } = this.props;
    const { cocktails } = cocktailsReducer;

    if (!isEmpty(textToSearch)) {
      const { drinks } = cocktails;

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

  fetchCocktails = () => {
    const { actions } = this.props;

    actions.fetchCocktails();
  };

  render() {
    const { filteredDrinks, textToSearch } = this.state;
    const { navigation, cocktailsReducer } = this.props;
    const { cocktails } = cocktailsReducer;
    const data = !isEmpty(textToSearch) ? filteredDrinks : cocktails.drinks;

    return (
      <View style={styles.container}>
        <CocktailsCardList data={data} navigation={navigation} />
      </View>
    );
  }
}

Overview.propTypes = {
  navigation: navigationShape.isRequired,
  cocktailsReducer: cocktailsReducerShape.isRequired,
  fetchCocktails: PropTypes.func.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  return {
    cocktailsReducer: state.cocktailsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cocktailsActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
