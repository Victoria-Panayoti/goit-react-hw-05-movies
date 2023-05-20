import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #e7dfdf;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: transparent;
  font: inherit;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  padding: 4px 12px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  font: inherit;
  cursor: pointer;
  background-color: #cbb8b8;
  color:#622162;
  padding: 4px 12px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #622162;
    color: #cbb8b8;
  }
`;
