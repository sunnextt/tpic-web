import React from 'react';
import Select from 'react-select';
import { InputLabel, Label } from './Input';

const ReactSelect = ({ options, colourStyles, label, placeholder, className, name, setFieldValue, errors, value }) => {
  const handleChange = (option) => {
    setFieldValue(name, option.value);
  };

  const customStyles = {
    width: '100%',
    option: (provided, state) => ({
      ...provided,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
  };

  return (
    <InputLabel>
      <Label>{label}</Label>
      <Select
        name={name}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        className={className}
        isSearchable
        onChange={handleChange}
      />
      {errors && <div className="text-danger">{errors}</div>}
    </InputLabel>
  );
};

export default ReactSelect;
