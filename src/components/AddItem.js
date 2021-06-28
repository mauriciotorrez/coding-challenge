import React, {Component} from 'react';
import {Image, Pressable, TextInput, Text, View,Button, Alert} from 'react-native';
import {connect} from 'react-redux';


const AddItem = ({ route, navigation }) => {

    const [word, onChangeWord] = React.useState("");
    const { index, currentProps } = route.params;
  
      return (
        <View >
          
          
          
          <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            color: 'black',
          }}

          value={word}
          onChangeText={onChangeWord}


        />

        <Button
          title="Add row"

          onPress={() => 
          {
                currentProps.addItem({
              index: index,
              value: word,
              key: index,
              displayMode: 0,
            });
        navigation.navigate('MainList');
    }
          }

        />

        </View>
      );

}


export default AddItem;