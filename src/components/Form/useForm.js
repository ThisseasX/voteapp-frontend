import { useState } from 'react';

export default () => {
  const [values, setValue] = useState({});

  const handleChange = (fieldName, value, transformationCallback) => {

    const resultValue =
      (typeof transformationCallback === 'function')
        ? transformationCallback(fieldName, value)
        : value;

    setValue({
      ...values,
      [fieldName]: resultValue
    });
  };

  const handleSubmit = () => {
    console.log(values);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};
