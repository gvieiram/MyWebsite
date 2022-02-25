import styled from 'styled-components';

export const Header = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colors.purple_primary};
  background-image: linear-gradient(
    0deg,
    ${props => props.theme.colors.background} 0%,
    ${props => props.theme.colors.purple_secondary} 51%,
    ${props => props.theme.colors.purple_primary} 80%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50%;

  /* @media (max-width: 720px) {
    margin-top: -270px;
  } */
`;

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.colors.nav_active};
  font-size: 4rem; // 64px
  padding: 0 30px;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 3rem; // 42px
    padding: 0 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 339px) {
    font-size: 2.5rem;
  }
`;

export const HeaderSubtitle = styled.h2`
  color: ${props => props.theme.colors.nav_active};
  font-size: 2.25rem; // 36px
  padding: 0 30px;

  @media (max-width: 720px) {
    font-size: 1.5rem; // 28px
    padding: 0 20px;
  }

  @media (max-width: 339px) {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  padding: 0 100px;

  @media (max-width: 720px) {
    width: 100%;
    padding: 0 40px;
    position: absolute;
    top: calc(50vh + 80px);
  }

  @media (max-width: 400px) {
    padding: 0 30px;
  }
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.background_card};
  width: 100%;
  padding: 0 30px 100px 30px;
  z-index: 9;
  border-radius: 5px;
  box-shadow: 0px 4px 15px ${props => props.theme.colors.shadow_light};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 290px;
  height: 290px;
  background-color: gray;

  filter: drop-shadow(0px 4px 10px ${props => props.theme.colors.shadow_dark});

  @media (max-width: 720px) {
    width: 220px;
    height: 220px;
    border-radius: 110px;
    margin-top: 50px;
  }

  @media (max-width: 339px) {
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.title};
  font-size: 2rem;
  margin: 20px 0;
  text-align: center;
`;

export const Text = styled.p`
  text-align: justify;
  white-space: pre-line;
  font-size: 1.15rem;
`;

export const RepoContent = styled.div`
  margin-top: 30px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
