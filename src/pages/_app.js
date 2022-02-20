import { GlobalStyle } from "../styles/GlobalStyles"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
