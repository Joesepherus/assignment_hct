// @flow
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import api from '../Services/Api'
import { connect } from 'react-redux'
import ContactActions from '../Redux/ContactRedux'
import OrderCard from '../Components/OrderCard'
import ContactAbout from '../Components/ContactAbout'

type Props = {
  orders: Array<Object>,
  selectedContact: Object,
  getContactsOrders: function,
  navigation: Object
}

class ContactDetailScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.selectedContact.name
    })

    this.props.getContactsOrders(this.props.selectedContact)
  }

  render() {
    const { orders } = this.props

    return (
      <View style={styles.container}>
        <ContactAbout data={this.props.selectedContact} />
        <ScrollView>
          <View style={styles.orders}>
            {orders !== null &&
              orders.map((order, index) => (
                <OrderCard key={index} data={order} />
              ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.contact.contactsOrders,
    selectedContact: state.contact.selectedContact
  }
}

const mapDispatchToProps = dispatch => ({
  getContactsOrders: selectedContact =>
    dispatch(ContactActions.getContactsOrders(selectedContact))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetailScreen)

const styles = StyleSheet.create({
  container: {
    // margin: 20
  },
  orders: {
    padding: 20
  }
})
