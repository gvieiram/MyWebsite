import { useTranslation } from 'react-i18next';

import '../../i18n';
import { SelectLanguage } from '../SelectLanguage';
import { SelectMenu } from '../SelectMenu';
import { Nav, NavLink, NavMenu } from './styles';

export function Navbar() {
  const { t } = useTranslation('navBar', { useSuspense: false });
  const navLink = t('options');

  return (
    <Nav>
      <NavMenu>
        {navLink.map(element => {
          return (
            <NavLink to={element.path} key={element.path}>
              {element.name}
            </NavLink>
          );
        })}
      </NavMenu>

      <SelectLanguage />
    </Nav>
  );
}
