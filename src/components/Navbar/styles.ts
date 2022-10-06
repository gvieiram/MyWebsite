import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background-color: ${props => props.theme.colors.dark_300};
  background-image: ${props => props.theme.colors.dark_background};
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px 0 150px;
  z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: 'Poppins', sans-serif;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  height: 100%;
  margin: 0 1rem -3px 1rem;

  &.active {
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    transition: 0.5s;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    border-radius: 1.5px;
    margin-left: -3px;
    background-color: ${props => props.theme.colors.purple_800};
  }

  &.active::after {
    width: calc(100% + 6px);
    transition: all 0.4s ease-in-out;
  }
`;
