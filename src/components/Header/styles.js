import styled from "styled-components";
import { motion } from 'framer-motion'

export const HeaderStyled = styled.header`
  background-color: var(--dark);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`
export const Content = styled.div`
  max-width: 1200px;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--white);
  margin: 0 auto;
`

export const Logo = styled(motion.div)`
  color: var(--blue);
  font-weight: 500;
  font-size: 2rem;
  width: 70px;

  @media (max-width: 450px) {
    margin-left: 20px;
  }
`
export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  

  li {
    cursor: pointer;
    padding: 1rem;
    transition: all ease 0.5s;
    position: relative;
    list-style: none;
    
    a {
      text-decoration: none;
      color: var(--white);
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--white);
      transition: all ease 0.5s;
    }

    &:hover {

      &:after {
        width: 100%;
      }
    }
  }

  @media (max-width: 450px) {
      display: ${ ( { show } ) => show ? 'flex' : 'none' };
      flex-direction: column;
      position: fixed;
      z-index: 999;
      top: 60px;
      right: 0;
      left: 0;
      overflow: hidden;
      padding: 20px;
      text-align: center;
      font-size: 2rem;

    }
`

export const Hamburguer = styled.div`
  display: none;
  width: 40px;
  height: 30px;
  
  
  .one, .two, .three {
    background-color: var(--white);
    height: 4px;
    width: 100%;
    margin: 5px auto;

    transition-duration: 0.5s;

  }

  @media (max-width: 450px) {
    display: block;
    margin-right: 20px;
  }
`