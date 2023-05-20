import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;
export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 4px;
  width: 120px;
  border-radius: 4px;
  background-color: #e7dfdf;
`;
export const CastImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
