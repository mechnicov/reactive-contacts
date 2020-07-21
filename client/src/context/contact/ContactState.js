import React, { useReducer } from 'react'
import axios from 'axios'

import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  CONTACT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  // Add contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('api/v1/contacts', contact, config)
      dispatch({type: ADD_CONTACT, payload: res.data})
    } catch (err) {
      dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
  }

  // Delete contact
  const deleteContact = async id => {
    try {
      await axios.delete(`api/v1/contacts/${id}`)
      dispatch({type: DELETE_CONTACT, payload: id})
    } catch (err) {
      dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
  }

  // Update current contact
  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`api/v1/contacts/${contact._id}`, contact, config)
      dispatch({type: UPDATE_CONTACT, payload: res.data})
    } catch (err) {
      dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
  }

  // Get contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('api/v1/contacts')
      dispatch({type: GET_CONTACTS, payload: res.data})
    } catch (err) {
      dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
  }

  // Set current contact
  const setCurrent = contact => {
    dispatch({type: SET_CURRENT, payload: contact})
  }

  // Clear current contact
  const clearCurrent = contact => {
    dispatch({type: CLEAR_CURRENT})
  }

  // Clear contacts
  const clearContacts = () => dispatch({type: CLEAR_CONTACTS})

  // Filter contacts
  const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS, payload: text})
  }

  // Clear Filter
  const clearFilter = contact => {
    dispatch({type: CLEAR_FILTER})
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        updateContact,
        deleteContact,
        getContacts,
        clearContacts,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
