import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 87vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--blue);
    font-size: 50px;
    padding: 10px;
    margin-bottom: 20px;
  }

`
export const Contacts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Emailform = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  h2 {
    color: var(--blue);
    margin: 0 auto; 
  }

  form {
    margin: 1rem auto;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    input {
      width: 80%;
      margin: .5rem auto;
      padding: .5rem 1rem;
      text-align: start;

      font-size: 1rem;
      background-color: var(--white);
      color: var(--dark);
      border: 3px solid var(--blue);
      border-radius: 10px;

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 20px var(--blue);
      }
    }

    textarea {
      width: 80%;
      height: 100px;
      margin: 1rem auto;
      padding: 1rem;
      text-align: start;

      font-size: 1rem;
      background-color: var(--white);
      color: var(--dark);
      border: 3px solid var(--blue);
      border-radius: 10px;

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 20px var(--blue);
      }
    }

    button {
      width: 250px;
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
    }
  }
`
export const Socials = styled.div`
  color: var(--blue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;

  h2 {
    color: var(--blue);
    margin-right: 2rem;
  }

  a {
    text-decoration: none;
  }

  .whatsapp {
    font-size: 3rem;
    color: var(--blue);
    margin-right: 2rem;

    :hover {
      color: #00A884 ;
    }
  }

  .linkedin {
    font-size: 3rem;
    color: var(--blue);

    &:hover {
      color: #0A66C2;
    }
  }
`