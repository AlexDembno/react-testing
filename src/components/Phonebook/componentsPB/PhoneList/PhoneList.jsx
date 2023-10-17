const PhoneList = ({ contacts, deleteContact }) => {
  // console.log('contacts', contacts);
  const list = contacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{list}</ul>;
};

export default PhoneList;
