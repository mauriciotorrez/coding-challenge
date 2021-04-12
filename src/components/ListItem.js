import React, {Component} from 'react';
import {Image, Pressable, TextInput, Text, View} from 'react-native';

const EDIT = 1;
const READ = 0;

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      displayMode: READ,
    };
  }

  render() {
    console.log('Render ListItem ', this.props.item.index + 1);
    if (this.state.displayMode === READ) {
      return (
        <View style={{flexDirection: 'row', padding: 20}}>
          <Text style={{fontSize: 18}}>{this.props.item.index + 1}</Text>
          <Text style={{fontSize: 18, marginHorizontal: 10, flex: 1}}>
            {this.props.item.value}
          </Text>
          <Pressable onPress={() => this.setState({displayMode: EDIT})}>
            <Image
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABe0lEQVRoge2ZLU/DQBiAHzELYpKfQYIHTYYjOAbja4Cp43fAT0Bj8ASBwBDkBJ4hUGCALOlAXJse0I+7Jtd729yTXLpuJ54nWS5NXwgEbFkBroE34AO4B7a8GtVgCMyA75x14dHLih7wQH5Euja92VnSBx4pDrnzp1bNATAF1pL7sph3H4ImjIE5SnJd+74o5rVpQRP0iCjn97yYq8bsDKmKSNFjZsCyezVzTCNS+qjTbOhSyhabiAGwmnzuuZSy5QjziCjZN3UtZUudiDlw6NjLin0gRsmdVezVI04de1nRiYg9QoQMQoQU6kacOPayIkRIoRMRI0KEDEKEFEKEFEKEFOpGHDv2siJESKETEbuECBnskEWYvjyLUY/wYlgEPml5BMAG2d9kXLIvMtznjXOyIUqRpPgIgAm/J0J/ZVsRsUT2hjwvphURANsUj4Fj7TryJWjKJeXD+S/U0SyeZ/7LT1AHwABY8KdWjT6Le0qut8BNsl4aNwp0hB8nHRjZ+k1ohAAAAABJRU5ErkJggg==',
              }}
              style={{width: 30, height: 30}}
            />
          </Pressable>
        </View>
      );
    } else {
      return (
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            color: 'black',
          }}
          onChangeText={value =>
            this.props.onChangeText({...this.props.item, value})
          }
          value={this.props.item.value}
          onSubmitEditing={() => this.setState({displayMode: READ})}
        />
      );
    }
  }
}

export default ListItem;
