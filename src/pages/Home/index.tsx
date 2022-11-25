import { useTranslation } from 'react-i18next';
import { FiChevronRight } from 'react-icons/fi';
import { useQuery } from 'react-query';
import FadeLoader from 'react-spinners/FadeLoader';

import { useTheme } from 'styled-components';

import aboutImage from '../../assets/about_ilustra.svg';
import { TimeLine } from '../../components/TimeLine';
import api from '../../services/api';
import { Title } from '../../styles/global';
import { About } from '../sub-pages/About';
import { Header } from '../sub-pages/Header';
import { HeaderContent, Container, RepoContent, Experience } from './styles';

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

  return (
    <>
      <HeaderContent>
        <Header theme="dark" />
      </HeaderContent>
      <Container>
        <About
          about={{ title: t('titles.about'), text: t('about') }}
          skills={{ title: t('titles.skills') }}
          image={aboutImage}
        />

        <Experience>
          <Title>{t('titles.experience')}</Title>
          <TimeLine />
        </Experience>
        {/* Recent Repositories */}
        <Title>{t('titles.github')}</Title>
        {isFetching && <FadeLoader color={colors.purple_600} />}
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
      </Container>
    </>
  );
}
