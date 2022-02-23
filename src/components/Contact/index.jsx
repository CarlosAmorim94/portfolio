import Lottie from "react-lottie"
import Link from "next/link"

import { Contacts, Container, Emailform, } from "./styles"
import EmailMessage from '../../../public/img/lottie/email.json'

export const Contact = () => {
  return (
    <Container>

      <h1>Entre em contato!</h1>

      <Contacts>

        <Emailform>

          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                speed: 1,
                animationData: EmailMessage,
              }}
            />        
          </div>
          
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
              Enviar!
            </button>

          </form>

        </Emailform>

        <div>
          Whatsapp
          Linkedin
        </div>

      </Contacts>
    </Container>
  )
}