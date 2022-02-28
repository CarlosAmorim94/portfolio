import styled from "styled-components";
import { motion } from 'framer-motion'

export const AboutStyled = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    justify-content: space-around;
    margin: 0 auto;
    height: auto;
    flex-wrap: wrap;
  }
`
export const ImageStyled = styled(motion.div)`
  width: 500px;
  border-radius: 50%;
  transition: all ease 0.3s;

  .neon {
    border-radius: 50%;
  }

  &:hover { // Neon
    border-radius: 50%;
    z-index: 99;
    box-shadow: 0 0 50px var(--blue);
  }

  @media (max-width: 450px) {
    width: 80%;
    text-align: center;
  }

  @media (max-width: 1030px) {
    width: 50%;
    margin: 0;
  }

`
export const TextArea = styled.div`
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--blue);
    font-size: 50px;
    padding: 10px;
    margin-bottom: 20px;
  }

  p {
    color: var(--white);
    font-size: 24px;
    margin-bottom: 30px;

    span {
      color: var(--blue);
      font-weight: bold;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0;

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
  }

  @media (max-width: 450px) {
    width: 100%;
    margin: 0 auto;

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 1030px) {
    width: 60%;
    
    p {
      font-size: 1rem;
    }
  }
`



