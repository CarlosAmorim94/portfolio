import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  max-width: 1200px;
  margin: 10vh auto;
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const TextStyled = styled.div`
  max-width: 50%;
  margin: 0 auto;
  
  h1 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    color: var(--blue);
    margin: 20px auto;
  }
`
export const ButtonStyled = styled.button`
  width: 70%;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  justify-content: space-evenly;
  padding: .5rem 2.5rem;
  background-color: var(--dark);
  color: var(--white);
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  border: 2px solid var(--blue);
  margin: 1rem auto;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all ease 0.5s;

  &:hover { // Neon
    box-shadow: 0 0 30px var(--blue);
  }
`

export const ImageStyled = styled.div`
  max-width: 50%;
  margin: 0 auto;
  min-width: 400px;
`