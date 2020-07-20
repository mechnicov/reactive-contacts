import React, { useReducer } from 'react'
import axios from 'axios'

import AuthContext from './authContext'
import AuthReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/v1/auth')
      dispatch({type: USER_LOADED, payload: res.data})
    } catch (err) {
      dispatch({type: AUTH_ERROR})
    }
  }

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/users', formData, config)
      dispatch({type: REGISTER_SUCCESS, payload: res.data})
      loadUser()
    } catch (err) {
      dispatch({type: REGISTER_FAIL, payload: err.response.data.msg})
    }
  }

  // Login User

  // Logout

  // Clear Errors
  const clearErrors = () => dispatch({type: CLEAR_ERRORS})

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
