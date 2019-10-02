import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const renderIngredients = ingredients => {
  return ingredients.map((ingredient, index) => {
    if (index === 2) {
      return <Text style={styles.leftIngredients}>{ingredient}</Text>;
    }
    return <Text style={styles.ingredient}>{`\u2022 ${ingredient}`}</Text>;
  });
};

const CocktailCard = ({ uri, title, onPress, ingredients }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.descriptionWrapper}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          {renderIngredients(ingredients)}
        </View>
        <Image style={styles.image} source={{ uri }} />
      </View>
    </TouchableOpacity>
  );
};

CocktailCard.propTypes = {
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CocktailCard;
