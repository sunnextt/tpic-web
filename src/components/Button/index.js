import React from 'react';
import ButtonWrap from './styled';

// eslint-disable-next-line react/prop-types
export const Button = ({
  children,
  color,
  width,
  onClick,
  radius,
  lineHeight,
  fontSize,
  padding,
  height,
  href,
  type,
  disabled,
}) => {
  return (
    <ButtonWrap
      color={color}
      width={width}
      radius={radius}
      fontSize={fontSize}
      lineHeight={lineHeight}
      padding={padding}
      height={height}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonWrap>
  );
};

export default Button;
