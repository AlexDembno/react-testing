import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContacts } from '../redux/contactSlice';

import { filterContact } from '../redux/filterSlice';

import { getContacts, getfilter } from '../redux/selectors';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import PhoneList from '../PhoneList/PhoneList';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const PhoneBook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getfilter);
  const contacts = useSelector(getContacts);

  const [contact, SetContact] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialState;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);

  const sabmitForm = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
    const result = contact.some(el =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    if (result) {
      evt.currentTarget.reset();
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact(name, number));

    evt.currentTarget.reset();
  };

  const hendleFilterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContact(value));
  };

  const filterName = () => {
    if (!filter) {
      return contacts;
    }
    const result = contacts.filter(
      el =>
        el.name.toLowerCase().includes(filter.toLowerCase()) ||
        el.number.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  };

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={sabmitForm} />
      <Filter onChange={hendleFilterChange} />

      <p>Contacts</p>
      <PhoneList contacts={filterName()} deleteContact={deleteContact} />
    </div>
  );
};

export default PhoneBook;
