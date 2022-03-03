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

// import { MenuItem } from './styles';

type LanguageProps = {
  id: number;
  name: string;
  value: string;
  disabled: boolean;
};

export function SelectLanguage() {
  const [language, setLanguage] = useState('');

  const { t, i18n } = useTranslation('navBar', { useSuspense: false });
  const languages: LanguageProps[] = t('languages');

  const { colors } = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const lngResult = (lng: string) => {
      return languages.find(l => l.value === lng);
    };

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
        return 'de';
      }
      return 'en';
    }

    if (lngResult(defaultLanguage())?.disabled === true) {
      i18n.changeLanguage('en');
    }

    setLanguage(defaultLanguage());
  }, [i18n, i18n.language, languages]);

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
        {languages.map(lng => {
          return (
            <MenuItem
              value={lng.value}
              key={lng.id}
              disabled={lng.disabled}
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
