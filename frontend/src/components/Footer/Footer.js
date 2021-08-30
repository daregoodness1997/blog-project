import React from 'react';
import {
  Container,
  FooterContainer,
  Nav,
  NavBarLink,
  NavBoxLeft,
  NavBoxRight,
} from '../../styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Nav>
          <NavBoxLeft>My Blog</NavBoxLeft>
          <NavBoxRight>
            <NavBarLink to='/ebook'>EBook</NavBarLink>
            <NavBarLink to='/blog'>Blog</NavBarLink>
            <NavBarLink to='/chat' className='button' primary>
              Chat me up
            </NavBarLink>
          </NavBoxRight>
        </Nav>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
