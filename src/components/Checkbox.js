import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 2em;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 13.3232px;
  line-height: 16px;
  color: #282828;
  opacity: 0.6;

  a {
    padding: 0;
    color: #00a953;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 0px;
  }

  span {
    padding: 0 .5rem;
  }
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 1px;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;
  margin-right: 2rem;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export default function Checkbox({ value, onChange, name, id, label, disabled, link, path }) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <span>
        {label}
        {link && <Link target="_blank" to={path}>{link}</Link>}
      </span>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}
