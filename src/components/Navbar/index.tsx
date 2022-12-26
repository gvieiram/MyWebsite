import { useTranslation } from 'react-i18next';

import '../../i18n';
import { SelectLanguage } from '../SelectLanguage';
import { Nav, NavLink, NavMenu } from './styles';

export function Navbar() {
  const { t } = useTranslation('navBar', { useSuspense: false });
  const navLink = t('options');

  return (
    <Nav>
      <NavMenu>
        {navLink.map((element, index) => {
          return (
            <NavLink to={element.path} key={String(index)}>
              {element.name}
            </NavLink>
          );
        })}
      </NavMenu>

      <SelectLanguage />
    </Nav>
  );
}
