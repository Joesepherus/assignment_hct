 // @flow
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  TouchableOpacity
} from 'react-native'
import api from '../Services/Api'
import Card from '../Components/Card'
import { connect } from 'react-redux'
import ContactActions from '../Redux/ContactRedux'
import Icon from '../Components/Icon'

type Props = {
  selectContact: function,
  getContacts: function,
  contacts: Array<Object>,
  navigation: Object
}

type State = {
}

class ContactsScreen extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Contacts',
      headerRight: (
        <Icon
          type='feather'
          name='plus'
          color='black'
          style={styles.plusIcon}
          onPress={() => {
              navigation.getParam('addContact')()
            }}
        />
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      addContact: this.addContact
    })

    this.props.getContacts()
  }

  selectContact = (index: number) => {
    
    this.props.navigation.push('ContactDetailScreen')
    let selectedContact = this.props.contacts[index]
    this.props.selectContact(selectedContact)
  }

  addContact = () => {
    this.props.navigation.push('AddContactScreen')
  }

  render() {
    const { contacts } = this.props
    

    return (
      <View style={styles.container}>
        <ScrollView>
          {contacts !== null && contacts.length > 0 &&
            contacts.map((contact, index) => (
              <TouchableOpacity
                onPress={() => this.selectContact(index)}
                key={index}
              >
                <Card data={contact} />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  plusIcon: {
    marginRight: 20
  }
})

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts,
  }
}

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(ContactActions.getContacts()),
  selectContact: contact => {
    
    return dispatch(ContactActions.selectContact(contact))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsScreen)
