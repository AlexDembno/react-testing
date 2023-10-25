import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from '../../redux/contactRedax/operations';

import { filterContact } from '../../redux/contactRedax/filterSlice';

import { getContacts, getfilter } from '../../redux/contactRedax/selectors';

import Form from '../../componentsPB/Form/Form';
import Filter from '../../componentsPB/Filter/Filter';
import PhoneList from '../../componentsPB/PhoneList/PhoneList';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getfilter);
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sabmitForm = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
    const result = items.some(el =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    if (result) {
      evt.currentTarget.reset();
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContacts({ name, number }));

    evt.currentTarget.reset();
  };

  const hendleFilterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContact(value));
  };

  const filterName = () => {
    if (!filter) {
      return items;
    }
    const result = items.filter(
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
      {isLoading && !error && <p>Loading...</p>}
      <PhoneList contacts={filterName()} deleteContact={deleteContact} />
    </div>
  );
};

export default PhoneBook;
