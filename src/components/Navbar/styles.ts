import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
  height: 60px;
  background-color: ${props => props.theme.colors.purple_primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: -1rem;
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.nav_active};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin: 0 1rem;

  &.active {
    color: ${props => props.theme.colors.nav_inactive};
  }
`;
