import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const CocktailCard = ({ uri, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.descriptionWrapper}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.ingredient}>{`\u2022 Gin`}</Text>
          <Text style={styles.ingredient}>{`\u2022 Lime Juice`}</Text>
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
};

export default CocktailCard;
