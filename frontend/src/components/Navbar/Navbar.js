import React from 'react';
import {
  Nav,
  NavBarLink,
  NavBoxLeft,
  NavBoxRight,
} from '../../styled-components';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
