import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useTheme } from 'styled-components';

import './styles.css';

export function SelectLanguage() {
  const [language, setLanguage] = useState('');

  const { t, i18n } = useTranslation('navBar', { useSuspense: false });
  const languages = t('languages');

  const { colors } = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    function defaultLanguage() {
      if (
        i18n.language.toLowerCase() === 'pt_br' ||
        i18n.language.toLowerCase() === 'pt-br'
      ) {
        return 'pt_br';
      }
      if (
        i18n.language.toLowerCase() === 'de-de' ||
        i18n.language.toLowerCase() === 'de'
      ) {
        return 'en';
      }
      return 'en';
    }

    setLanguage(defaultLanguage());
    i18n.changeLanguage(defaultLanguage());
  }, [i18n, i18n.language]);

  return (
    <FormControl
      sx={{
        '& div#demo-simple-select': {
          backgroundColor: 'rgba(44, 44, 44, 0.69)',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)',
          color: colors.white,
        },
        '& svg': {
          color: colors.gray,
        },
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={handleChange}
        sx={{
          '& div.MuiPaper-root': {
            backgroundColor: 'rgba(44, 44, 44, 0.827)',
          },
        }}
      >
        {languages.map((lng, index) => {
          return (
            <MenuItem
              value={lng.value}
              key={String(index)}
              disabled={lng.value === 'de'}
              id="menu-item"
            >
              {lng.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
