import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

const Header: React.FC = ({ children }) => (
  <HeaderContainer>
    <Link id="header-logo" to="/">
      <AiOutlineBook size={30} />
      <span>Bookeep</span>
    </Link>
    {children}
  </HeaderContainer>
);

export default Header;
