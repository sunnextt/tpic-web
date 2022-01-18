import React from 'react';
import styled from 'styled-components';

import logo from '../../../../assets/png/Logopng.png';

const BrandLogo = () => {
  return <Image src={logo} alt="Company Logo" />;
};

export default BrandLogo;

const Image = styled.img`
  width: 122px;
  height: 52.24px;
`;
