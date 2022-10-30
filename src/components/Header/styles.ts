import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.colors.main};
  padding: 12px 0;
  nav {
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 32px;
      span {
        color: ${({theme}) => theme.colors.highlight}
      }
    }
  }
`;