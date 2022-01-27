import React from 'react';
import ButtonWrap from './styled';

// eslint-disable-next-line react/prop-types
const Button = ({children, color, width, onClick}) => {
  return (
    <ButtonWrap color={color} width={width} onClick={onClick}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
