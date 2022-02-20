import styled from "styled-components";

export const HeroStyled = styled.main`
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

export const TextStyled = styled.article`
  width: 550px;
  
  color: var(--light);
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin: 0 auto;

  text-transform: uppercase;

  span {
    font-size: 64px;
    color: var(--blue);
    margin: 1rem 0;
  }

  

`
export const ImageStyled = styled.div`
  width: 600px;
  margin: 0 auto;
  
 
`
