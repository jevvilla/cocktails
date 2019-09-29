import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { navigationShape } from '../../common/propTypes';
import strings from '../../common/strings';
import CocktailsCardList from './components/CocktailsCardList';

import styles from './styles';

class Overview extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: <Text style={styles.headerTitle}>{strings.OVERVIEW_HEADER_TITLE}</Text>,
  });

  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    this.fetchCocktails();
  }

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
