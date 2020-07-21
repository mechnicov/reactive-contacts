import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  CONTACT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact),
        loading: false,
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
        loading: false,
      }
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      }
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const { name, email, phone } = contact
          const regexp = new RegExp(`${action.payload}`, 'gi')
          return `${name} ${email} ${phone}`.match(regexp)
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default:
      return state
  }
}
