import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ContactAbout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Phone</Text>
        <Text>{this.props.data.phone}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 20
  }
})
