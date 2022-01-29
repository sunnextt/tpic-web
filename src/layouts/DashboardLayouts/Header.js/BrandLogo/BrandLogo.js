import React from 'react';
import styled from 'styled-components';
import dashLogo from 'assets/svg/DashboardLogo.svg';



const BrandLogo = () => {
  return <Image src={dashLogo} alt="Company Logo" />;
};

export default BrandLogo;

const Image = styled.img`
  width: 122px;
  height: 52.24px;
`;
