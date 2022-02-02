import React from 'react';
import Upload from 'rc-upload';
import styled from 'styled-components';

const FlexUploadDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;

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

const FileUploadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;

  .flex_upload_input_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Span = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  background-color: ${({ background }) => (background === 'approved' ? '#DEFFE7' : '#FDE6E1')};
  padding: 12px 26px;
  border: none;
  margin: 0;
  h6 {
    color: ${({ color }) => (color === 'approved' ? '#00A953' : '#FF2E00')};
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    line-height: 20px;
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

const UploadInput = styled.input`
  background: #ffffff;
  opacity: 0.3;
  border: 0.8327px solid #282828;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem;
  width: 50%;
`;

const ButtonUpload = styled.button`
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  text-align: center;
  background: #e7e7e7;
  border: 1px solid #abafb3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 2rem;
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

export const UploadButton = ({ uploadProps, label, component, name, className, style, children, filename, status }) => {
  return (
    <FileUploadWrap>
      <Label>{label}</Label>
      <FlexUploadDiv>
        <UploadInput placeholder={filename ? filename : ''} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3rem' }}>
          <Upload {...uploadProps} component={component} name={name} className={className} style={style}>
            <ButtonUpload>{children}</ButtonUpload>
          </Upload>
          <Span color={status} background={status}>
            <h6>{status}</h6>
          </Span>
        </div>
      </FlexUploadDiv>
    </FileUploadWrap>
  );
};

export default FileUpload;
