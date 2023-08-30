import { useState } from 'react';
import { nanoid } from 'nanoid';

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
  const [contact, SetContact] = useState(initialState);
  const [filter, SetFilter] = useState('');
  const id = nanoid();

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
    SetContact(prev => [...prev, { id, name, number }]);
    evt.currentTarget.reset();
  };

  const hendleFilterChange = evt => {
    const { value } = evt.currentTarget;
    SetFilter(value);
  };

  const filterName = () => {
    if (!filter) {
      return contact;
    }
    const result = contact.filter(
      el =>
        el.name.toLowerCase().includes(filter.toLowerCase()) ||
        el.number.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  };

  const deleteContact = id => {
    SetContact(prev => prev.filter(el => el.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={sabmitForm} />
      <Filter onChange={hendleFilterChange} />

      <p>Contacts</p>
      <PhoneList contact={filterName()} deleteContact={deleteContact} />
    </div>
  );
};

export default PhoneBook;
