import { useState } from 'react';

export default () => {
  const [values, setValue] = useState({});

  const handleChange = (fieldName, value, transformationCallback) => {
    let resultValue;

    if (typeof transformationCallback === 'function') {
      resultValue = transformationCallback(fieldName, value);
    } else {
      resultValue = value;
    }

    setValue({
      ...values,
      [fieldName]: resultValue
    });
  };

  const handleSubmit = () => {
    console.log(values)
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};
