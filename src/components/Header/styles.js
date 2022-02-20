import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--dark);
  color: var(--light);
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export const Logo = styled.div`
  color: var(--blue);
  font-weight: 500;
  font-size: 2rem;
`
export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

 

  li {
    cursor: pointer;
    padding: 1rem;
    transition: all ease 0.5s;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--light);
      transition: all ease 0.5s;
    }

    &:hover {
      color: var(--gray-light);

      &:after {
        width: 100%;
      }
    }
  }

  @media (max-width: 957px) {
      display: ${ ( { show } ) => show ? 'block' : 'none' };
      position: fixed;
      z-index: 999;
      top: 60px;
      overflow: hidden;
      width: 100vw;
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
    background-color: white;
    height: 4px;
    width: 100%;
    margin: 5px auto;

    transition-duration: 0.5s;

  }

  @media (max-width: 957px) {
    display: block;
    margin-right: 20px;
  }
`