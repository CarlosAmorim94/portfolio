import { AboutStyled, ImageStyled, TextArea, } from "./styles";
import Link from "next/link";

import Image from 'next/image'
import profilePicture from '../../../public/img/foto.png'
import downloadIcon from '../../../public/img/icons/download.svg'
import { motion } from 'framer-motion'


export const About = () => {


  return (
  <AboutStyled id="about">
    <ImageStyled
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: .7 }} //onScroll
      transition={{ duration: 1 }}
      viewport={{ once: true }} // only one time
    >
      <Image
        className="neon"
        src={profilePicture}
        alt="Foto de perfil"
        layout="responsive"
      />
    </ImageStyled>

    <TextArea>
      <motion.h1 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }} //onScroll
        transition={{ duration: 1, delay: 0.5, type: 'spring',
        stiffness: 80 }}
        viewport={{ once: true }} // only one time
      >
        Sobre
      </motion.h1>
        
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} //onScroll
        transition={{ duration: 3, delay: 1.2 ,type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
      Desde pequeno sempre fui <span>fascinado por tecnologia</span>, meus olhos brilhavam quando um software ou site inovador/facilitador era lançado! Faz um tempo que dei asas ao sonho de me tornar um desenvolvedor que inova e facilita o dia a dia das pessoas!
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} //onScroll
        transition={{ duration: 3, delay: 1.7 ,type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
      Me considero <span>ágil, criativo</span>, consistente em aprender e me <span>adaptar as mudanças</span>, pronto para superar qualquer desafio! Sempre me dizem que tenho facilidade para fazer novas amizades e lidar com pessoas.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}} //onScroll
        transition={{ duration: 3, delay: 2.2 ,type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
      Se eu pudesse me definir em 3 palavras, certamente seriam: 
      
      <span> otimista, criativo e esforçado!</span>
  
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 350 }}
        whileInView={{ opacity: 1, y: 0 }} //onScroll
        transition={{ duration: 3 , type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
        <Link 
        href="https://drive.google.com/file/d/1tU-iZOQbjmGLyKhq09LJeiupnGUaoAo6/view?usp=sharing"
         >
            <a target="_blank">
              <Image src={downloadIcon} alt="LinkedIn icon"/>
              Curriculo
            </a>
        </Link>
      </motion.div>
    </TextArea>

    
  </AboutStyled>
  )
}