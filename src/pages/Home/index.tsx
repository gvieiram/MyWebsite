import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronRight } from 'react-icons/fi';
import { useQuery } from 'react-query';
import FadeLoader from 'react-spinners/FadeLoader';

import { useTheme } from 'styled-components';

import ProfileImage from '../../assets/ProfileImg.jpeg';
import { Skills } from '../../components/Skills';
import { TimeLine } from '../../components/TimeLine';
import api from '../../services/api';
import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Content,
  Container,
  Card,
  Image,
  SpecsContent,
  Title,
  Text,
  RepoContent,
} from './styles';

type Repository = {
  repo: string;
  description: string;
  link: string;
};

export function Home() {
  const { t } = useTranslation('home', { useSuspense: false });
  const { colors } = useTheme();

  const { data: repos, isFetching } = useQuery<Repository[]>(
    'repos',
    async () => {
      const response = await api.get(
        // 'https://api.github.com/users/gvieiram/repos?per_page=4&sort=updated',
        '/?username=gvieiram', // Pinned repositories
      );

      return response.data;
    },
  );

  function getImageProfile() {
    const storedImage = localStorage.getItem('@MyWebsite:profileImg');

    if (storedImage) {
      return storedImage;
    }
    return undefined;
  }

  useEffect(() => {
    localStorage.setItem('@MyWebsite:profileImg', ProfileImage);
  }, []);

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
          <Image src={getImageProfile()} />

          <SpecsContent>
            <div>
              {/* About */}
              <Title>{t('titles.about')}</Title>
              <Text>{t('about')}</Text>
            </div>

            <div>
              {/* Skills */}
              <Title>{t('titles.skills')}</Title>
              <Skills />
            </div>
          </SpecsContent>

          {/* Experience */}
          <Title>{t('titles.experience')}</Title>
          <TimeLine />
          {/* Recent Repositories */}
          <Title>{t('titles.github')}</Title>
          {isFetching && <FadeLoader color={colors.purple_primary} />}
          <RepoContent>
            {repos?.map(repo => (
              <a
                key={repo.repo}
                target="_blank"
                rel="noreferrer"
                href={repo.link}
              >
                <div>
                  <strong>{repo.repo}</strong>
                  <p>{repo.description}</p>
                </div>
                <FiChevronRight size={30} />
              </a>
            ))}
          </RepoContent>
        </Card>
      </Container>
    </>
  );
}
