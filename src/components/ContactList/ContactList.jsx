import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}: {contact.phone}</p>
            <button
              type="button"
              onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
   );
};
