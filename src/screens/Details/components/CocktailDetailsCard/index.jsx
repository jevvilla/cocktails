import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';

import strings from '../../../../common/strings';

import styles from './styles';

const renderMeasures = measures => {
  return measures.map(measure => (
    <Text key={measure} style={styles.measures}>
      {measure}
    </Text>
  ));
};

const CocktailDetailsCard = ({ uri, measures, instructions }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri }} />
      </View>
      <View style={styles.descriptionContainer}>
        {renderMeasures(measures)}
        <Text style={[styles.measures, styles.howTo]}>{`\u2022 ${strings.HOW_TO_PREPARE}`}</Text>
        <Text style={styles.measures}>{instructions}</Text>
      </View>
    </View>
  );
};

CocktailDetailsCard.propTypes = {
  uri: PropTypes.string.isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.string.isRequired,
};

export default CocktailDetailsCard;
