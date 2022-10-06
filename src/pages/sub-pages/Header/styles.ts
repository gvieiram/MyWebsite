import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100vh;
  background-image: ${props => props.theme.colors.dark_background};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  /* @media (max-width: 720px) {
    margin-top: -270px;
  } */

  & > h1 {
    font-size: 4rem; // 64px
    white-space: pre-line;
    line-height: 100%;

    @media (max-width: 720px) {
      font-size: 3rem; // 42px
      padding: 0 20px;
      margin-bottom: 30px;
    }

    @media (max-width: 339px) {
      font-size: 2.5rem;
    }
  }

  & > h3 {
    font-size: 30px;
    font-weight: 300;

    @media (max-width: 720px) {
      font-size: 1.5rem; // 28px
      padding: 0 20px;
    }

    @media (max-width: 339px) {
      font-size: 1.2rem;
    }
  }
`;

export const Image = styled.img`
  width: 290px;
  height: 290px;
  border-radius: 145px;
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
