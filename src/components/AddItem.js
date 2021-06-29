import React from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';

const AddItem = ({ route, navigation }) => {

    const [word, onChangeWord] = React.useState("");
    const { index, currentProps } = route.params;
    const addRow = () => {
      currentProps.addItem({
        index: index,
        value: word,
        key: index,
        displayMode: 0,
      });
      navigation.navigate('MainList');
    } 
  
    return (
      <View >
        <TextInput
          style={styles.txtInput}
          value={word}
          onChangeText={onChangeWord}
        />
        <Button
          title="Add row"
          onPress={addRow}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  txtInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'black',
  }
});

export default React.memo(AddItem);