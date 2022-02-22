import React from 'react';
import { useTranslation } from 'react-i18next';

import { Skills } from '../../components/Skills';
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
          <Skills
            skills={[
              { name: t('skills.js.name'), done: t('skills.js.done') },
              { name: t('skills.react.name'), done: t('skills.react.done') },
              {
                name: t('skills.react-native.name'),
                done: t('skills.react-native.done'),
              },
              { name: t('skills.ts.name'), done: t('skills.ts.done') },
              {
                name: t('skills.angular.name'),
                done: t('skills.angular.done'),
              },
              { name: t('skills.qa.name'), done: t('skills.qa.done') },
            ]}
          />
        </Card>
      </Container>
    </>
  );
}
