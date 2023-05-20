import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 8px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #512a2a;
  font-weight: 500;
  transition: transform 0.2s ease-in-out;

  &.active {
    color: #cbb8b8;
    background-color: #a32d87;
  }
  &:hover,
  &:focus{    
    transform: scale(1.05);
  }
`;
export const Main =styled.main`
    display:flex;
    flex-direction: column;
    gap: 24px;
`