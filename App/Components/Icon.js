import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
//GLOBAL
import IconFeather from 'react-native-vector-icons/dist/Feather'
import IconIonicons from 'react-native-vector-icons/dist/Ionicons'
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons'
import IconCommunityMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons'

export default class Default extends Component {
  constructor(props) {
    super(props)
    // this.state = { };
  }

  getIcon() {
    const { style } = this.props
    let resIcon
    switch (this.props.type) {
      case 'ionicons':
        resIcon = (
          <IconIonicons
            style={style}
            name={this.props.name || 'home'}
            size={this.props.size || 20}
            color={this.props.color || 'white'}
            onPress={this.props.onPress}
          />
        )
        break
      case 'feather':
        resIcon = (
          <IconFeather
            style={style}
            name={this.props.name || 'home'}
            size={this.props.size || 20}
            color={this.props.color || 'white'}
            onPress={this.props.onPress}
          />
        )
        break
      case 'material':
        resIcon = (
          <IconMaterial
            style={style}
            name={this.props.name || 'home'}
            size={this.props.size || 20}
            color={this.props.color || 'white'}
            onPress={this.props.onPress}
          />
        )
        break
      case 'communityMaterial':
        resIcon = (
          <IconCommunityMaterial
            style={style}
            name={this.props.name || 'home'}
            size={this.props.size || 20}
            color={this.props.color || 'white'}
            onPress={this.props.onPress}
          />
        )
        break
    }
    return resIcon
  }

  render() {
    return this.getIcon()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  }
})
