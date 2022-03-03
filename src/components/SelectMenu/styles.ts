import { FaChevronDown } from 'react-icons/fa';

import styled, { css } from 'styled-components';

interface SelectMenuProps {
  isActive?: boolean;
  isDisabled?: boolean;
}

export const Container = styled.div`
  position: relative;
  max-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;

  padding: 0 1rem;
`;

export const Button = styled.button`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(44, 44, 44, 0.69);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  padding: 0 1rem;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  outline: none;
  transition: 0.3s;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.66);
  }

  &:active {
    background-color: rgba(44, 44, 44, 0.65);
  }
`;

export const ArrowSvg = styled(FaChevronDown)<SelectMenuProps>`
  margin-left: 10px;
  transition: 0.5s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;

export const ItemsContainer = styled.div`
  position: relative;
  min-width: 10rem;
`;

export const ItemsList = styled.ul`
  position: absolute;
  width: 100%;
  margin-top: 0.75rem;
  overflow-y: auto;
  /* border: solid 1px #e5e7eb; */
  border-radius: 0.375rem;
  /* box-shadow: 0 1px 2px 0 #0000000d; */
  max-height: 16rem;
`;

export const ItemList = styled.li<SelectMenuProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  cursor: default;
  transition-duration: 150ms;
  color: #6b7280;

  background-color: rgba(44, 44, 44, 0.827);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  color: #fff;

  &:hover {
    color: #4f46e5;
    background-color: #eef2ff;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: #4f46e5;
      background-color: #eef2ff;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: rgba(163, 163, 163, 0.252);
      /* background-color: #eef2ff; */

      &:hover {
        color: rgba(163, 163, 163, 0.252);
        background-color: rgba(44, 44, 44, 0.827);
        cursor: not-allowed;
      }
    `}
`;
