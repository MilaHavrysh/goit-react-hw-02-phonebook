import './App.css';
import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Klim', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copelend', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const submit = newName => {
    let arrayName = contacts
      .map(elem => elem.name)
      .find(el => el === newName.name);
    arrayName === undefined
      ? setContacts(prevState => [newName, ...prevState])
      : alert(`${newName.name} уже есть в книге`);
  };

  return (
    <>
      <h1>phonebook</h1>
      <ContactForm onSubmit={submit} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      <Filter filter={filter} setFilter={setFilter} contacts={contacts} />
    </>
  );
};

export default App;
