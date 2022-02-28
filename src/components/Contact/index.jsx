import Lottie from "react-lottie"

import { Contacts, Container, Emailform, Socials, ImageStyled } from "./styles"
import EmailMessage from '../../../public/img/lottie/email.json'
import { SiWhatsapp } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <Container id="contact">

      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }} //onScroll
        transition={{ duration: 1, delay: 0.5, type: 'spring',
        stiffness: 80 }}
        viewport={{ once: true }} // only one time
      >
        Entre em contato!
      </motion.h1>

      <Contacts>

        <Emailform>

          <ImageStyled
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }} //onScroll
            transition={{ duration: 2 }}
            viewport={{ once: true }} // only one time
          >
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
            value="https://carlosamorim.vercel.app/emailsent" />

            <input
            type="hidden"
            name="_autoresponse"
            value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
            
            <motion.input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome"
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 1 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time

            />

            <motion.input 
            type="email" 
            name="email" 
            placeholder="Digite seu email"
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 1.5 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            />

            <motion.input 
            type="text" 
            name="subject" 
            placeholder="Assunto"
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 2 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time/
            />

            <motion.textarea  
            name="message" 
            placeholder="Digite uma mensagem..."
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 2.5 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            />
            
            <motion.button type="submit"
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 3 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            >
              <AiOutlineMail />
              Enviar!
            </motion.button>

            <Socials
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 3.5, type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            >
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