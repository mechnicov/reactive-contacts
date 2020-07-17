import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = props => {
  const initialState = []

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Set Alert

  // Remove Alert

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
