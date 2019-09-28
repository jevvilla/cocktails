import React, { PureComponent } from 'react';
import { View } from 'react-native';

import CocktailsCardList from './components/CocktailsCardList';

import styles from './styles';

class Overview extends PureComponent {
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

    return (
      <View style={styles.container}>
        <CocktailsCardList data={drinks} />
      </View>
    );
  }
}

export default Overview;
