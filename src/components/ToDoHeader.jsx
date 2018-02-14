import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBar, HeaderTitle, HeaderBack } from 'styles';

const Header = () => (
  <HeaderBar>
    <HeaderBack><Link to="/" href="/" label="Home"><i className="fa fa-arrow-left"></i></Link></HeaderBack>
    <HeaderTitle>ToDo</HeaderTitle>
  </HeaderBar>
);

export default Header;
