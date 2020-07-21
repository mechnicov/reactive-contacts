import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, filtered, getContacts, loading } = contactContext

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  if (contacts.length === 0) {
    return <h4>There is no contacts</h4>
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered === null ?
          contacts.map(contact => <CSSTransition key={contact._id} timeout={500} classNames='item'><ContactItem contact={contact}/></CSSTransition>) :
          filtered.map(contact => <CSSTransition key={contact._id} timeout={500} classNames='item'><ContactItem contact={contact}/></CSSTransition>)}
      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts
