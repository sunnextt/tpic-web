import React from 'react';
import { FloatingNavWrap, Li, Link, NavWrap, Ul } from './styled';

const Nav = ({ collapsed }) => {
  console.log(collapsed);
  return (
    <NavWrap collapsed={collapsed}>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <a href="#about_us">About Us</a>
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

export const FloatingNav = ({ collapsed }) => {
  console.log(collapsed);
  return (
    <FloatingNavWrap collapsed={collapsed}>
      <Ul collapsed={collapsed} className="floating_nav">
        <Li collapsed={collapsed}>
          <Link collapsed={collapsed} to="/">
            Home
          </Link>
        </Li>
        <Li collapsed={collapsed}>
          <Link collapsed={collapsed} to="/">
            About Us
          </Link>
        </Li>
        <Li collapsed={collapsed}>
          <Link collapsed={collapsed} to="/gallery">
            Gallery
          </Link>
        </Li>
        <Li collapsed={collapsed}>
          <Link collapsed={collapsed} to="/contactus">
            Contact Us
          </Link>
        </Li>
      </Ul>
    </FloatingNavWrap>
  );
};

export default Nav;
