import React, {Component} from 'react'
import CircleMenu from '../src'
import {View} from 'react-native'

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: '#0E1329',
    flex: 1,
    justifyContent: 'center'
  },
  actionButtonIcon: {
    color: '#FFF',
    fontSize: 20,
    height: 22
  }
};

export default class extends Component {
  items = [
    {
      name: 'md-home',
      color: '#298CFF',
    },
    {
      name: 'md-search',
      color: '#30A400',
    },
    {
      name: 'md-time',
      color: '#FF4B32',
    },
    {
      name: 'md-settings',
      color: '#8A39FF',
    },
    {
      name: 'md-navigate',
      color: '#FF6A00',
    },
  ];

  onPress = index => console.warn(`${this.items[index].name} icon pressed!`);

  render() {
    return <View style={styles.container}>
      <CircleMenu
        bgColor="#E74C3C"
        items={this.items}
        onPress={this.onPress}
      />
    </View>
  }
}