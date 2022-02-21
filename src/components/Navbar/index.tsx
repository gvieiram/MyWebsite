import React from 'react';

import { Nav, NavLink, NavMenu } from './styles';

export function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </NavMenu>
    </Nav>
  );
}
