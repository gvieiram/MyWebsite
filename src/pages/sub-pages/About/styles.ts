import styled from 'styled-components';

export const Specs = styled.div`
  height: 100vh;
  padding: 0 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & .specs-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 50%;

    & .content {
      width: 100%;
    }

    @media (max-width: 880px) {
      flex-direction: column;

      & .content {
        width: 100%;
      }
    }
  }

  & span {
    margin-top: 5%;
  }
`;
