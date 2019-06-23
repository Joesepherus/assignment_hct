// @flow
import React, { Component } from 'react'
import { Text, View, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ContactActions from '../Redux/ContactRedux'
import CustomButton from '../Components/Button'

type Props = {
  addContact: function,
  addContactSuccess: boolean,
  navigation: Object
}

type State = {
  name: string,
  phone: string
}

class AddContactScreen extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add New Contact'
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addContactSuccess !== false) {
      this.props.navigation.goBack()
    }
  }

  changeText = (type, e) => {
    this.setState({
      [type]: e
    })
  }

  addContact = async () => {
    const { name, phone } = this.state
    if(name.length < 5 || phone.length < 5) {
      ToastAndroid.showWithGravityAndOffset('Name and phone have to be atleast 5 characters long.', ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50)
      return
    }
    let contact = {
      name: name,
      phone: phone
    }
    let response = await this.props.addContact(contact)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pt10}>First and Last Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={e => this.changeText('name', e)}
          value={this.state.name}
          placeholder="enter your name"
        />
        <Text style={styles.pt10}>Phone</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={e => this.changeText('phone', e)}
          value={this.state.phone}
          placeholder="enter your phone number"
          keyboardType="numeric"
        />
        <CustomButton onPress={this.addContact} style={styles.mt10} title='Add'/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    response: state.contact.response,
    addContactSuccess: state.contact.addContactSuccess
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(ContactActions.addContact(contact))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContactScreen)


const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  pt10: {
    paddingTop: 10
  },
  mt10: {
    marginTop: 10
  }
})
