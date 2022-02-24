import Lottie from "react-lottie"

import { Contacts, Container, Emailform, Socials, ImageStyled } from "./styles"
import EmailMessage from '../../../public/img/lottie/email.json'
import { SiWhatsapp } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai'

export const Contact = () => {
  return (
    <Container id="contact">

      <h1>Entre em contato!</h1>

      <Contacts>

        <Emailform>

          <ImageStyled>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                speed: 1,
                animationData: EmailMessage,
              }}
            />        
          </ImageStyled>
          
          <form action="https://formsubmit.co/carlos.av.amorim@gmail.com" method="POST">
            
            <h2>Por e-mail:</h2>

            <input
            type="hidden"
            name="_next"
            value="https:localhost:3000/emailsent" />

            <input
            type="hidden"
            name="_autoresponse"
            value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
            
            <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome"/>

            <input 
            type="email" 
            name="email" 
            placeholder="Digite seu email"/>

            <input 
            type="text" 
            name="subject" 
            placeholder="Assunto"/>

            <textarea  
            name="message" 
            placeholder="Digite uma mensagem..."/>
            
            <button type="submit">
              <AiOutlineMail />
              Enviar!
            </button>

            <Socials>
              <h2>Ou por redes sociais:</h2>
              <a href="https://api.whatsapp.com/send?phone=5514998057785" _blank="true">
                <SiWhatsapp className="whatsapp" />
              </a>
              <a href="https://www.linkedin.com/in/carlosamorim94/">
                <SiLinkedin className="linkedin" />
              </a>
              
            </Socials>

          </form>

        </Emailform>

        

      </Contacts>
    </Container>
  )
}