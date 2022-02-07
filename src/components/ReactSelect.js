import React from 'react';
import Select from 'react-select';
import { InputLabel, Label } from './Input';

const ReactSelect = ({ options, colourStyles, label, placeholder, className, name, setFieldValue, errors, value }) => {
  const handleChange = (option) => {
    setFieldValue(name, option.value);
  };

  return (
    <InputLabel>
      <Label>{label}</Label>
      <Select
        name={name}
        options={options}
        styles={colourStyles}
        placeholder={placeholder}
        className={className}
        defaultValue="nig"
        isSearchable
        onChange={handleChange}
      />
      {errors && <div className="text-danger">{errors}</div>}
    </InputLabel>
  );
};

export default ReactSelect;
