import React from 'react';
import Select from 'react-select';
import { InputLabel, Label } from './Input';

const ReactSelect = ({ options, colourStyles, label, placeholder, className, name, onChange, onInputChange }) => {
  return (
    <InputLabel>
      <Label>{label}</Label>
      <Select
        name={name}
        options={options}
        styles={colourStyles}
        placeholder={placeholder}
        className={className}
        isSearchable
        onChange={onChange}
        onInputChange={onInputChange}
      />
    </InputLabel>
  );
};

export default ReactSelect;
