import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';
import './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section> 
    <h1>Phonebook</h1>
    <ContactForm />
    <h2> Contacts</h2>
    <Filter />
    {isLoading && !error && <Loader/>}
    <ContactList />
    </section>
     );
};
