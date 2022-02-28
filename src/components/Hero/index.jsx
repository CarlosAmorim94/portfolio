import { HeroStyled, TextStyled, ImageStyled } from "./styles";
import { motion } from "framer-motion"

import Link from "next/link";
import Image from "next/image";
import Lottie from 'react-lottie';
import programming from '../../../public/img/lottie/programming.json'
import github from '../../../public/img/icons/GitHub.svg'
import linkedin from '../../../public/img/icons/LinkedIn.svg'


export const Hero = () => {


  return (
  <HeroStyled>
    <TextStyled
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 2,
      delay: 0.8
    }}
    >

      Olá, eu sou <br/>
      <span>CARLOS AMORIM</span>
      <br/> Desenvolvedor Front-End

      <div>
        <Link href="https://www.linkedin.com/in/carlosamorim94/" >
          <motion.a
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 2.1,
            duration: 1,
          }}>
            <Image src={linkedin} alt="LinkedIn icon"/>
            Linkedin
          </motion.a>
        </Link>

        <Link href="https://github.com/CarlosAmorim94" className="button">
        <motion.a
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 2,
            delay: 2.3,
            duration: 1,
          }}>
            <Image src={github} alt="GitHub icon"/>
            GitHub
          </motion.a>
        </Link>
      </div>
    </TextStyled>

    
    <ImageStyled
       
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 3,
        delay: 1.5
      }}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          speed: 1,
          animationData: programming,
        }}
          />
    </ImageStyled>
    
  </HeroStyled>
  )
}