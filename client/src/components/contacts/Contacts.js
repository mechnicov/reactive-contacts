import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
      <TransitionGroup>
        {filtered === null ?
          contacts.map(contact => <CSSTransition key={contact.id} timeout={500} classNames='item'><ContactItem contact={contact}/></CSSTransition>) :
          filtered.map(contact => <CSSTransition key={contact.id} timeout={500} classNames='item'><ContactItem contact={contact}/></CSSTransition>)}
      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts
