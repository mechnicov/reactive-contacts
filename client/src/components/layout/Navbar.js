import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout, user } = authContext

  const contactContext = useContext(ContactContext)
  const { clearContacts } = contactContext

  const onLogout = () => {
    logout()
    clearContacts()
  }

  const authLinks = (
    <Fragment>
      <li><Link to='/'>{user && user.name}</Link></li>
      <li>
        <Link to='#!' onClick={onLogout}>
          <i className='fas fa-sign-out-alt'/> <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </Fragment>
  )

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}/> {title}
      </h1>
      <ul>
        <li><Link to='/about'>About</Link></li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
}

export default Navbar
