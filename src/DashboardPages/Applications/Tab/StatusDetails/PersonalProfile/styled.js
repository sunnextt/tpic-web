import styled from 'styled-components';

const PPCTs = styled.div`
  .align_item_center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  }
  .styled_form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form_container {
    width: 80%;

  }
`;

export const SaveAndContBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

export const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 17.9886px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #00a953;

  &:hover {
    color: #ffb400;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export default PPCTs;
