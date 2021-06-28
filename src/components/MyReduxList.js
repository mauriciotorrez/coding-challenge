/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {addItem, updateItem} from '../global_state/actions/listActions';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const dictionary = lorem.split(' ');

class MyReduxList extends React.PureComponent {

  keyExtractor = (item) => item.index.toString();

      renderItem = ({ item }) => (
            <ListItem
              key={item.index}
              item={item}
              onChangeText={item => this.props.updateItem(item)}
            />
          );

  render() {
    console.log('Render MyReduxList');
    const nextIndex = this.props.listData.length;
    const data=this.props.listData;
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          removeClippedSubviews
          keyExtractor={this.keyExtractor}
        />
        <Button
          title="Add row"
          onPress={() =>  navigate('AddItem',{
              index: nextIndex,
              currentProps: this.props
          })         
          }
        />
      </SafeAreaView>
    );
  }
}

const actions = {
  addItem,
  updateItem,
};

const mapStateToProps = state => {
  return {listData: state};
};

export default connect(mapStateToProps, actions)(MyReduxList);
