import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
const PADDING = 10

export default class Default extends Component {
  constructor(props) {
    super(props)
    // this.state = { };
  }
  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    return (
      <TouchableOpacity
        pressColor={this.props.pressColor}
        higlight
        androidOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={this.props.disabled ? null : this.onPress}
        disabled={this.props.disabled}
        style={[
          styles.container,
          this.props.active ? styles.active : null,
          this.props.style,
          this.props.height ? { height: this.props.height } : null
        ]}
      >
        {/* {this.props.iconName ?
                      <Icon name={this.props.iconName} color={this.props.color || gColors.white} size={this.props.iconSize || 25} />
                    : null } */}
        <Text
          style={[
            this.props.active ? styles.btnTextActive : styles.btnText,
            this.props.textStyle,
            this.props.iconName ? { marginLeft: 15 } : null
          ]}
        >
          {this.props.title || 'Button'}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#1094F6',
    height: 50,
    minWidth: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: PADDING,
    // paddingRight: PADDING
    // overflow:'hidden',
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.35,
    // shadowRadius: 5,
    // elevation: 15
    // flexDirection: "row"
    // its for android
    //  elevation: 15,
  },
  active: {
    backgroundColor: 'white'
  },
  btnText: {
    // fontFamily: "WorkSans-Regular",
    fontSize: 14,
    color: 'white'
  },
  btnTextActive: {
    color: 'blue'
  }
})
