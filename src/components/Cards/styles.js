import styled from "styled-components";

export const Content = styled.article`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;

`

export const ImageStyled = styled.div`
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  color: var(--white);

  span {
    color: var(--blue);
  }
`