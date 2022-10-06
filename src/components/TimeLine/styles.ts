import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';

import styled from 'styled-components';

export const SchoolIcon = styled(HiOutlineAcademicCap)`
  color: #fff;

  @media (min-width: 1170px) {
    width: 32px;
    height: 32px;
    top: 43%;
    left: 44%;
  }

  @media (max-width: 1169px) {
    width: 26px;
    height: 26px;
    top: 48%;
    left: 48%;
  }
`;

export const WorkIcon = styled(HiOutlineBriefcase)`
  @media (min-width: 1170px) {
    width: 32px;
    height: 32px;
    top: 43%;
    left: 44%;
  }

  @media (max-width: 1169px) {
    width: 26px;
    height: 26px;
    top: 48%;
    left: 48%;
  }
`;

export const Title = styled.h2`
  margin-top: -10px;
  color: ${props => props.theme.colors.gray_03};
`;

export const Subtitle = styled.h5`
  color: ${props => props.theme.colors.gray_02};
`;

export const Text = styled.p`
  font-weight: 400;
  white-space: pre-line;
  color: ${props => props.theme.colors.gray_03};
`;
