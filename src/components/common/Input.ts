import styled from "styled-components";

export const Input = styled.input`
  border-radius: 12px;
  padding: 8px 16px;
  outline: none;
  border: 2px solid transparent;
  font-size: 16px;
  transition: all 0.2s ease-in;

  &:focus {
    border: 2px solid ${({theme}) => theme.colors.dark};
  }
`;