import styled from 'styled-components';

const NavContainer = styled.div`
  .sitemap {
    h5 {
      font-weight: 500;
      font-size: 18px;
      line-height: 36px;
      color: #282828;
    }
  }

  .copyright_div {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    .copyright {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #282828;
    }

    a {
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #282828;

      &:hover {
        color: ${(props) => props.theme.colors.colorOrangePrimary};
        transition: 0.3s;
      }
    }
  }
`;

export const Img = styled.img`
  width: 50%;
`;
export const SocialDiv = styled.div`
margin: 2rem auto;
  h6 {
    font-size: 18px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
  .social {
    display: flex;
    gap: 2rem;
  }

  .icon_social {
    padding: 10px;
    color: #00a953;
    background: rgba(0, 169, 83, 0.1);
    border-radius: 14px;
  }

  span {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #282828;
  }
`;

export const NavDiv = styled.nav``;
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;
export const Li = styled.li`
  font-family: Lato;
  font-size: 16px;
  line-height: 150%;
  a {
    font-weight: 500;
    align-items: center;
    color: #282828;

    &:hover {
      color: ${(props) => props.theme.colors.colorOrangePrimary};
      transition: 0.3s;
    }
  }
`;

export default NavContainer;
