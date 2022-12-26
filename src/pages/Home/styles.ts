import styled from 'styled-components';

export const HeaderContent = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  padding-bottom: 150px;
  background-image: ${props => props.theme.colors.dark_background_secondary};
  color: ${props => props.theme.colors.white};

  @media (min-width: 721px) {
    top: calc(50vh + 10%);
  }

  @media (max-width: 720px) {
    padding: 0 40px;
    top: calc(50vh + 80px);
  }

  @media (max-width: 400px) {
    padding: 0 30px;
  }
`;

export const Experience = styled.div`
  width: 100%;
  padding: 50px 150px;
  background-image: ${props => props.theme.colors.dark_background};
`;

export const RepoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 150px;
  margin-top: 30px;

  a {
    background: ${props => props.theme.colors.white};
    border-radius: 5px;
    width: 60%;
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
