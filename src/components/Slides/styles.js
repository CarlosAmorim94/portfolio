import styled from "styled-components";

export const Carrousel = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;


  .each-fade {
    display: flex;
    width: 100%;
  }

  .each-fade > div {
    width: 75%;
    width: 100vh;
  }

  .each-fade > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .each-fade p {
    width: 25%;
    font-size: 1em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0;
    background: #adceed;
  }
`