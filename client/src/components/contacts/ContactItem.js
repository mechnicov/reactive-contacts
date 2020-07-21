import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash.capitalize'

import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact } = contactContext

  const { id, name, email, phone, type } = contact

  const onDelete = () => {
    deleteContact(id)
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        {' '}
        <span
          className={`badge ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}
          style={{ float: 'right' }}
        >
          {capitalize(type)}
        </span>
      </h3>
      <ul className='list'>
        {email && <li><i className='fas fa-envelope-open'/> {email}</li>}
        {phone && <li><i className='fas fa-phone'/> {phone}</li>}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem
