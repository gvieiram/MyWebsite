import React from 'react';
import { useTranslation } from 'react-i18next';

import { Skills } from '../../components/Skills';
import { TimeLine } from '../../components/TimeLine';
import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Content,
  Container,
  Card,
  Image,
  Title,
  Text,
} from './styles';

export function Home() {
  const { t } = useTranslation('home', { useSuspense: false });

  return (
    <>
      <Header>
        <Content>
          <HeaderTitle>Gustavo Vieira Martins</HeaderTitle>
          <HeaderSubtitle>{t('header.profession')}</HeaderSubtitle>
        </Content>
      </Header>

      <Container>
        <Card>
          <Image src="https://github.com/gvieiram.png" />

          {/* About */}
          <Title>{t('titles.about')}</Title>
          <Text>{t('about')}</Text>

          {/* Skills */}
          <Title>{t('titles.skills')}</Title>
          <Skills />

          <Title>{t('titles.experience')}</Title>
          <TimeLine />
        </Card>
      </Container>
    </>
  );
}
