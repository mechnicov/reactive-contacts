import React from 'react'
import capitalize from 'lodash.capitalize'

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        {' '}
        <span className={`badge ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}>
          {capitalize(type)}
        </span>
      </h3>
    </div>
  )
}

export default ContactItem
