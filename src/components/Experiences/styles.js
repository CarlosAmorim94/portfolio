import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--blue);
    font-size: 50px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const Carrousel = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .each-fade {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 670px) {
      width: 100%;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 auto;
    }

    .text {
      color: var(--white);
      padding: 0 1rem 0 2rem ;
      width: 25%;
      font-size: 1em;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0;

      @media (max-width: 670px) {
        width: 100%;
      }

      h2 {
        color: var(--blue);
        margin-bottom: 1rem;
      }

      p {
        margin-top: 1rem;

        span {
          color: var(--blue);
        }

        @media (max-width: 670px) {
          font-size: 14px;
        }
      }

      div {
        margin-top: 1rem;
        color: var(--blue);
      }
      
    }

    .image {
      width: 70%;

      @media (max-width: 670px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .react-slideshow-container .default-nav {
    width: 45px;
    height: 70px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 80px;
      height: 100px;
      fill: var(--blue);
      width: 100%;
      background-color: transparent;
    }
  }

`