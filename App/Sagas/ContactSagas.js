import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ContactActions from '../Redux/ContactRedux'
import { ToastAndroid, Alert } from 'react-native'

export function* getContacts(api, action) {
  const response = yield call(api.getContacts)

  if (response.ok) {
    const contacts = response.data.items
    yield put(ContactActions.getContactsSuccess(contacts))
  } else {
    yield put(ContactActions.getContactsFailure())
  }
}

export function* getContactsOrders(api, action) {
  const { selectedContact } = action
  const response = yield call(api.getContactsOrders, selectedContact.id)

  if (response.ok) {
    const orders = response.data.items
    yield put(ContactActions.getContactsOrdersSuccess(orders))
  } else {
    yield put(ContactActions.getContactsOrdersFailure())
  }
}

export function* selectContact(api, action) {
  const { contact } = action

  yield put(ContactActions.selectContactSuccess(contact))
}

export function* addContact(api, action) {
  const { contact } = action
  const response = yield call(api.addContact, contact)

  if (response.ok) {
    ToastAndroid.showWithGravityAndOffset(
      'New contact successfully created.',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      50
    )
    yield put(ContactActions.addContactSuccess(response))
  } else {
    yield call(Alert.alert, 'Failure', response.originalError.message)
    yield put(ContactActions.addContactFailure(response))
  }
}
