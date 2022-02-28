import { ButtonStyled, Container, ImageStyled, TextStyled } from '../styles/emailSentStyles'
import { Header } from "../components/Header";
import EmailSentImg from '../../public/img/lottie/mailsent.json'
import Lottie from 'react-lottie';

const EmailSent = () => {

  return (
    <Container>

      <Header />

      <TextStyled>

        <h1>E-mail enviado com sucesso!</h1>

        <ButtonStyled>
          <a href='http://localhost:3000'>Voltar</a>
        </ButtonStyled>

      </TextStyled>

      <ImageStyled>
        <Lottie 
          options ={{
            loop: false,
            autoplay: true,
            speed: 0.5,
            animationData: EmailSentImg,
          }}
        />
      </ImageStyled>

    </Container>
  )
}

export default EmailSent