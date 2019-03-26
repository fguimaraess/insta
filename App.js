import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, 
  Image,
  Dimensions,
  ScrollView,
  FlatList } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class App extends Component {
  render() {
    const fotos = [
      { id: 1, usuario: 'felipe' },
      { id: 2, usuario: 'joao' },
      { id: 3, usuario: 'pedro' },
    ];

    return (

      <FlatList style={{marginTop: 20}}
        data={fotos}
        keyExtractor={ ({item}) => String(item.id) }
        renderItem={ ({item}) => 
        <View>
          <Text>{item.usuario}</Text>
          <Image source={require('./resources/img/perfil.jpg')}
            style={{width: width, height: width}}/>
        </View>
        }
        keyExtractor={item => item.id}
      />
    );
  }
}
