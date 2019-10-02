import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { take } from 'lodash';

import { navigationShape } from '../../../../common/propTypes';
import CocktailCard from '../../../../common/components/CocktailCard';
import * as routes from '../../../../navigation/routes';
import { getFilteredIngredients, getIngredientsAndMeasurements } from '../../../../common/tools';

import styles from './styles';

class CocktailsCardList extends PureComponent {
  navigate = item => {
    const { navigation } = this.props;
    const measures = getIngredientsAndMeasurements(item);

    navigation.navigate(routes.DETAILS, {
      headerTitle: item.strDrink,
      uri: item.strDrinkThumb,
      instructions: item.details[0].strInstructions,
      measures,
    });
  };

  getIngredients = item => {
    const filteredElements = getFilteredIngredients(item);
    const ingredients = take(filteredElements, 2);
    const leftIngredients = filteredElements.length - 2;

    if (leftIngredients > 0) {
      const message = leftIngredients > 1 ? 'ingredientes' : 'ingrediente';
      ingredients.push(`y ${leftIngredients} ${message} mas`);
    }

    return ingredients;
  };

  renderItem = ({ item }) => (
    <CocktailCard
      uri={item.strDrinkThumb}
      title={item.strDrink}
      ingredients={this.getIngredients(item)}
      onPress={() => this.navigate(item)}
    />
  );

  keyExtractor = item => item.idDrink;

  render() {
    const { data } = this.props;

    return (
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

CocktailsCardList.propTypes = {
  navigation: navigationShape.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CocktailsCardList;
