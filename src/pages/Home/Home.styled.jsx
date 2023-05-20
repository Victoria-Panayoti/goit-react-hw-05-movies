import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const StyledLink = styled(Link)`
  display: block;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
color: #b60c75;
transform: scale(1.1);
  }
`;
