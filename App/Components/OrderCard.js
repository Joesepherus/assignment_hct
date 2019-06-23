import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class OrderCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data } = this.props

    return (
      <View style={styles.container}>
        <Text>{data.name}</Text>
        <Text style={styles.count}>{data.count}x</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10
    // flex: 1
  },
  textContainer: {
    marginLeft: 20
  },
  count: {
    marginLeft: 'auto'
  }
})
