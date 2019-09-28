import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';

import CocktailCard from '../../../../common/components/CocktailCard';
import styles from './styles';

class Overview extends PureComponent {
  renderItem = ({ item }) => <CocktailCard uri={item.strDrinkThumb} title={item.strDrink} />;

  keyExtractor = item => item.idDrink;

  render() {
    const { data } = this.props;

    return (
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default Overview;
