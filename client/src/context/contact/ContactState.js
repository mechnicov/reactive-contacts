import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Vasya',
        email: 'vasya@vasya.com',
        phone: '1234567',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Petya',
        email: 'petya@petya.com',
        phone: '7654321',
        type: 'professional'
      },
    ],
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  // Add contact
  const addContact = contact => {
    contact.id = uuid()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete contact
  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id})
  }

  // Set current contact

  // Clear current contact

  // Update current contact

  // Filter contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
