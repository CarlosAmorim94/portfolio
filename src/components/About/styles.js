import styled from "styled-components";

export const AboutStyled = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 957px) {
    display: flex;
    flex-direction: column;
  }
`


