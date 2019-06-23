import { createStackNavigator, createAppContainer } from 'react-navigation'

import ContactsScreen from '../Pages/ContactsScreen'
import Header from '../Components/Header'
import ContactDetailScreen from '../Pages/ContactDetailScreen'
import AddContactScreen from '../Pages/AddContactScreen'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    ContactsScreen: { screen: ContactsScreen },
    ContactDetailScreen: { screen: ContactDetailScreen },
    AddContactScreen: { screen: AddContactScreen }
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'ContactsScreen',
    navigationOptions: {
      header: Header
    }
  }
)

export default createAppContainer(PrimaryNav)
