import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
const DEFAULT_PICTURE =
  'http://www.sackettwaconia.com/wp-content/uploads/default-profile.png'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri:
                data.pictureUrl !== undefined
                  ? data.pictureUrl
                  : DEFAULT_PICTURE
            }}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{data.name}</Text>
          <Text>{data.phone}</Text>
        </View>
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
  }
})
