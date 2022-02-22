import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SkillBar = styled.div`
  background-color: ${props => props.theme.colors.gray};
  border-radius: 20px;
  position: relative;
  margin: 6px 0;
  height: 13px;
  width: 100%;
`;

export const Progress = styled.div`
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.purple_primary},
    ${props => props.theme.colors.purple_tertiary}
  );
  box-shadow: 0 3px 3px -5px ${props => props.theme.colors.purple_primary},
    0 2px 5px ${props => props.theme.colors.purple_tertiary};
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
  font-size: 10px;
  font-weight: bold;
`;

export const Skill = styled.h5`
  font-size: 1.15rem;
  font-weight: 400;
`;
