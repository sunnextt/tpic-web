import React from 'react';
import Upload from 'rc-upload';
import styled from 'styled-components';

const FileUploadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;

  span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    text-align: left;
    color: #abafb3;
  }
`;
const Label = styled.label`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13.3232px;
  line-height: 16px;
  color: #282828;
`;
const Input = styled.input`
  background: #ffffff;
  opacity: 0.3;
  border: 0.8327px solid #282828;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  text-align: center;
  background: #e7e7e7;
  border: 1px solid #abafb3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 2rem;
  color: #abafb3;
  cursor: pointer;
  font-style: normal;
`;

const FileUpload = ({ uploadProps, label, component, name, className, style, children, description, filename }) => {
  return (
    <FileUploadWrap>
      <Label>{label}</Label>
      <Upload {...uploadProps} component={component} name={name} className={className} style={style}>
        <Input placeholder={filename ? filename : ''} />
        <Button>{children}</Button>
      </Upload>
      {description && <span>{description}</span>}
    </FileUploadWrap>
  );
};

export default FileUpload;
