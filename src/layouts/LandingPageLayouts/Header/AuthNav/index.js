import React from 'react';
import AuthNavDiv, { Link } from './styled';

const AuthNav = () => {
  return (
    <AuthNavDiv>
      <Link className="selected" to="/login">
        login
      </Link>
      <Link to="/register">Sign Up</Link>
    </AuthNavDiv>
  );
};

export default AuthNav;
