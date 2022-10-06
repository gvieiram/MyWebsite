import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Portfolio() {
  return (
    <Container>
      <h1>I'm building this page!</h1>
      <h2>
        Please <Link to="/">go back</Link>
      </h2>
    </Container>
  );
}
