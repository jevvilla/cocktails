import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { navigationShape } from '../../../../common/propTypes';
import CocktailCard from '../../../../common/components/CocktailCard';
import * as routes from '../../../../navigation/routes';

import styles from './styles';

class Overview extends PureComponent {
  navigate = () => {
    const { navigation } = this.props;
    navigation.navigate(routes.DETAILS);
  };

  renderItem = ({ item }) => (
    <CocktailCard uri={item.strDrinkThumb} title={item.strDrink} onPress={this.navigate} />
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

Overview.propTypes = {
  navigation: navigationShape.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Overview;
