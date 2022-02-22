/* eslint-disable import/no-unresolved */
import React from 'react';

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
  return (
    <>
      <Header>
        <Content>
          <HeaderTitle>Gustavo Vieira Martins</HeaderTitle>
          <HeaderSubtitle>Front-End Developer</HeaderSubtitle>
        </Content>
      </Header>

      <Container>
        <Card>
          <Image src="https://github.com/gvieiram.png" />

          <Title>About</Title>
          <Text>
            I'm a Developer passionate about solve problems using code!{'\n'}I
            started 3 years ago studying frontend by myself.{'\n'}Recently I
            discovered that I love to manage teams and come up with ideas and
            solutions to improve our day-to-day work and deliveries.{'\n'}I
            currently work as a software developer and mainly work with React
            JS, NodeJS, Express JS, Cypress and Jest.{'\n'}Also a functional
            programming enthusiast and a dog father.
          </Text>
        </Card>
      </Container>
    </>
  );
}
