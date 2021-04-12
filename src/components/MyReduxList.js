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

class MyReduxList extends Component {
  render() {
    console.log('Render MyReduxList');
    const nextIndex = this.props.listData.length;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={this.props.listData}
          renderItem={({item}) => (
            <ListItem
              item={item}
              onChangeText={item => this.props.updateItem(item)}
            />
          )}
        />
        <Button
          title="Add row"
          onPress={() => {
            this.props.addItem({
              index: nextIndex,
              value: dictionary[nextIndex],
              key: nextIndex,
            });
          }}
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
