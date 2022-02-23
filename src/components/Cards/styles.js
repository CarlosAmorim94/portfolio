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

  p {
    width: 100%;
    text-align: center;
    margin: 1rem auto;
  }

  a {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    padding: .5rem 2.5rem;
    background-color: var(--dark);
    color: var(--white);
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    border: 2px solid var(--blue);
    cursor: pointer;
    letter-spacing: 1px;
    transition: all ease 0.5s;
    margin-top: 1rem;

    span {
      margin-left: .5rem;
      color: var(--white);
    }

    &:hover { // Neon
      box-shadow: 0 0 30px var(--blue);
    }
  }
`