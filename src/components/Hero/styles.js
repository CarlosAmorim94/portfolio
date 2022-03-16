import styled from "styled-components";
import { motion } from "framer-motion"

export const HeroStyled = styled.main`
  width: 100vw;
  max-width: 1200px;
  margin: 10vh auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const TextStyled = styled(motion.article)`
  width: 550px;
  height: 500px;
  padding: 2rem 0;
  color: var(--white);
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin: 0 auto 1rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    margin: 3rem auto;
    width: 100%;
    height: auto;
    font-size: 1.2rem;
    text-align: center;
  }

  span {
    font-size: 63px;
    color: var(--blue);

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem 0 0;

    a {
      width: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      justify-content: space-evenly;
      padding: 1rem 2.5rem;
      background-color: var(--dark);
      color: var(--white);
      border-radius: 5px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      border: 2px solid var(--blue);
      margin-right: 2rem;
      cursor: pointer;
      letter-spacing: 2px;
      transition: all ease 0.5s;

      &:hover { // Neon
        box-shadow: 0 0 30px var(--blue);
      }
    }

    @media (max-width: 450px) {
      width: 90%;
      display: flex;
      justify-content: space-around;
      margin: 3rem auto 0;

      a {
        width: 45%;
        margin: 0;
        padding: 0.5rem 1rem;
        align-items: center;
        justify-content: space-around;
      }
    }
  }

`
export const ImageStyled = styled(motion.div)`
  width: 600px;
  margin: 0 auto;

  @media (max-width: 450px) {
   width: 250px ;
   margin: 0 auto;
  }

  @media (max-width: 1150px) {
   width: 400px ;
   margin: 0 auto;
  }
`
