import React from 'react';
import { Li, Link, NavWrap, Ul } from './styled';

const Nav = (props) => {
  return (
    <NavWrap>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/">About Us</Link>
        </Li>
        <Li>
          <Link to="/gallery">Gallery</Link>
        </Li>
        <Li>
          <Link to="/contactus">Contact Us</Link>
        </Li>
      </Ul>
    </NavWrap>
  );
};

export default Nav;
