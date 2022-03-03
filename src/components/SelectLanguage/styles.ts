import {
  FormControl,
  Select as OptionsSelect,
  MenuItem as SelectItem,
} from '@mui/material';
import styled from 'styled-components';

export const HeaderContainer = styled(FormControl)`
  background-color: rgba(44, 44, 44, 0.22);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  outline: none;

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-₢ {
    color: ${props => props.theme.colors.white};
    font-family: 'Poppins', sans-serif;
  }

  svg {
    color: ${props => props.theme.colors.gray};
  }

  &:enabled {
    border: none;
  }
`;

export const MenuItem = styled(SelectItem)`
  & #menu-item {
    background-color: ${props => props.theme.colors.purple_primary};
  }
`;

export const ListItem = styled.option`
  list-style: none;
  margin-bottom: 0.8em;
`;
