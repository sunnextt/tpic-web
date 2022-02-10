import styled from 'styled-components';

const StatusDetailsContainer = styled.div`
  .margin_bottom {
    margin-bottom: 2rem;
  }
  .RFS-ConnectorContainer {
    top: calc(16px);
    left: calc((-50% + 35px) - 15px);
    right: calc((50% + 35px) - 15px);
    position: absolute;
  }
`;

export const StatusHeading = styled.h5`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #004221;
  text-align: left;
  margin: 0;
  margin-top: 3rem;
`;
export const TabWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 2rem;
`;
export default StatusDetailsContainer;
