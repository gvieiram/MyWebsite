import React from 'react';
import { useTranslation } from 'react-i18next';

import { availableLanguages } from '../../i18n';
import { Nav, NavLink, NavMenu } from './styles';

export function Navbar() {
  const { t, i18n } = useTranslation('navBar', { useSuspense: false });

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

  return (
    <Nav>
      <NavMenu>
        <NavLink to="/">{t('home')}</NavLink>
        <NavLink to="/portfolio">{t('portfolio')}</NavLink>
      </NavMenu>
      <select
        defaultValue={defaultLanguage()}
        onChange={e => i18n.changeLanguage(e.target.value)}
      >
        {availableLanguages.map(language => (
          <option key={language} value={language}>
            {language === 'pt_br'
              ? 'Portuguese 🇧🇷'
              : language === 'de'
              ? 'German 🇩🇪'
              : 'English 🇺🇸'}
          </option>
        ))}
      </select>
    </Nav>
  );
}
