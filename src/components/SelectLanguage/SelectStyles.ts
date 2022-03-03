/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from 'styled-components';

const { colors } = useTheme();

const select = {
  minWidth: 200,
  background: 'white',
  color: colors.purple_primary,
  fontWeight: 200,
  borderStyle: 'none',
  borderWidth: 2,
  borderRadius: 12,
  paddingLeft: 24,
  paddingTop: 14,
  paddingBottom: 15,
  boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
  '&:focus': {
    borderRadius: 12,
    background: 'white',
    borderColor: colors.purple_primary,
  },
};

const list = {
  paddingTop: 0,
  paddingBottom: 0,
  background: 'white',
  '& li': {
    fontWeight: 200,
    paddingTop: 12,
    paddingBottom: 12,
  },
  '& li:hover': {
    background: colors.purple_primary,
  },
  '& li.Mui-selected': {
    color: 'white',
    background: colors.purple_primary,
  },
  '& li.Mui-selected:hover': {
    background: colors.purple_primary,
  },
};

export default { select, list };
