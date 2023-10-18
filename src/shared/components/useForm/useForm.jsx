import { useState } from 'react';

const useForm = ({ initiaState, onSubmit }) => {
  const [state, setState] = useState({ ...initiaState });

  const handleChange = evt => {
    const { name, value, checked, type } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => ({ ...prevState, [name]: newValue }));
  };

  const sabmitForm = evt => {
    evt.preventDefault();
    onSubmit({ ...state });
    setState({ ...initiaState });
    evt.currentTarget.reset();
  };

  return { state, handleChange, sabmitForm };
};

export default useForm;
