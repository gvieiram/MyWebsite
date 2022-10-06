import styled from 'styled-components';

export const Hexagon = styled.img`
  height: 700px;
  border-radius: 145px;

  @media (max-width: 720px) {
    height: 220px;
    border-radius: 110px;
    margin-top: 50px;
  }

  @media (max-width: 339px) {
    height: 150px;
    border-radius: 75px;
  }
`;
