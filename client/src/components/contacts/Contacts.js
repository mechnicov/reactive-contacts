import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, filtered } = contactContext

  if (contacts.length === 0) {
    return <h4>There is no contacts</h4>
  }

  return (
    <Fragment>
      {filtered === null ?
        contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>) :
        filtered.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
    </Fragment>
  )
}

export default Contacts
