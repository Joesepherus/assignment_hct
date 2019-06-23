import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { getContactsOrders } from '../Sagas/ContactSagas'
import { select } from 'redux-saga/effects'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getContacts: null,
  getContactsSuccess: ['contacts'],
  getContactsFailure: null,
  getContactsOrders: ['selectedContact'],
  getContactsOrdersSuccess: ['orders'],
  getContactsOrdersFailure: null,
  selectContact: ['contact'],
  selectContactSuccess: ['selectedContact'],
  selectContactFailure: null,
  addContact: ['contact'],
  addContactSuccess: ['response'],
  addContactFailure: ['response']
})

export const ContactTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  contacts: null,
  contactsOrders: null,
  selectedContact: null,
  response: null,
  addContactSuccess: false
})

/* ------------- Selectors ------------- */

export const contactsSelectors = {
  selectAvatar: state => state.github.avatar
}

export const contactsOrders = {
  selectOrders: state => state.contactsOrders
}

/* ------------- Reducers ------------- */

export const getContacts = state =>
  state.merge({ fetching: true, contacts: null })

export const orders = state =>
  state.merge({ fetching: false, contactsOrders: null })

export const selectContact = (state, action, contact) => {
  return state.merge({ fetching: false, selectedContact: null })
}

export const addContact = (state, action) => {
  return state.merge({
    fetching: false,
    addContactSuccess: false
  })
}

// ===== SUCCESS =====

export const getContactsSuccess = (state, action) => {
  const { contacts } = action

  return state.merge({
    fetching: false,
    error: null,
    contacts: contacts
  })
}

export const getContactsOrdersSuccess = (state, action) => {
  const { orders } = action

  return state.merge({
    fetching: false,
    error: null,
    contactsOrders: orders
  })
}

export const selectContactSuccess = (state, action) => {
  const { selectedContact } = action

  return state.merge({
    fetching: false,
    error: null,
    selectedContact: selectedContact
  })
}

export const addContactSuccess = (state, action) => {
  const { response } = action

  return state.merge({
    fetching: false,
    error: null,
    addContactSuccess: true
  })
}

// ===== FAILURES =====
export const getContactsFailure = (state, action) =>
  state.merge({
    fetching: false,
    error: true
  })

export const getContactsOrdersFailure = (state, action) =>
  state.merge({
    fetching: false,
    error: true
  })

export const selectContactFailure = (state, action) =>
  state.merge({
    fetching: false,
    error: true
  })

export const addContactFailure = (state, action) => {
  return state.merge({
    fetching: false,
    error: true
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CONTACTS]: getContacts,
  [Types.GET_CONTACTS_ORDERS_SUCCESS]: getContactsOrdersSuccess,
  [Types.GET_CONTACTS_ORDERS_FAILURE]: getContactsOrdersFailure,
  [Types.GET_CONTACTS_ORDERS]: orders,
  [Types.GET_CONTACTS_SUCCESS]: getContactsSuccess,
  [Types.GET_CONTACTS_FAILURE]: getContactsFailure,
  [Types.SELECT_CONTACT]: selectContact,
  [Types.SELECT_CONTACT_SUCCESS]: selectContactSuccess,
  [Types.SELECT_CONTACT_FAILURE]: selectContactFailure,
  [Types.ADD_CONTACT]: addContact,
  [Types.ADD_CONTACT_SUCCESS]: addContactSuccess,
  [Types.ADD_CONTACT_FAILURE]: addContactFailure
})
