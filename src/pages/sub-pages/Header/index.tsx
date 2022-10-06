import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import profileImgLight from '../../../assets/ProfileImage_light.png';
import profileImg from '../../../assets/ProfileImage.png';
import { ProfileImage } from '../../../components/ProfileImage';
import { HeaderContainer, Content } from './styles';

interface IHeader {
  theme: string;
}

export function Header({ theme }: IHeader) {
  const { t } = useTranslation('home', { useSuspense: false });

  function getImageProfile() {
    const storedImage = localStorage.getItem(
      theme === 'light'
        ? '@MyWebsite:profileImgLight'
        : '@MyWebsite:profileImg',
    );

    if (storedImage) {
      return storedImage;
    }
    return undefined;
  }

  useEffect(() => {
    localStorage.setItem('@MyWebsite:profileImg', profileImg);
    localStorage.setItem('@MyWebsite:profileImgLight', profileImgLight);
  }, []);

  return (
    <HeaderContainer>
      <Content>
        <h3>{t('header.regards')}</h3>
        <h1>{t('header.name')}</h1>
        <h3>{t('header.profession')}</h3>
      </Content>
      <ProfileImage image={getImageProfile()} />
    </HeaderContainer>
  );
}
