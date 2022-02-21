import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: ${props => props.theme.colors.purple_primary};
  color: #fff;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
