import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.main};
  padding: 16px;
`;