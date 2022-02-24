import { HeroStyled, TextStyled, ImageStyled } from "./styles";

import Link from "next/link";
import Image from "next/image";
import Lottie from 'react-lottie';
import programming from '../../../public/img/lottie/programming.json'
import github from '../../../public/img/icons/Github.svg'
import linkedin from '../../../public/img/icons/LinkedIn.svg'

export const Hero = () => {


  return (
  <HeroStyled>
    <TextStyled>

      Olá, eu sou <br/>
      <span>CARLOS AMORIM</span>
      <br/> Desenvolvedor Front-End

      <div>
        <Link href="https://www.linkedin.com/in/carlosamorim94/" >
          <a>
            <Image src={linkedin} alt="LinkedIn icon"/>
            Linkedin
          </a>
        </Link>

        <Link href="https://github.com/CarlosAmorim94" className="button">
          <a>
            <Image src={github} alt="GitHub icon"/>
            GitHub
          </a>
        </Link>
      </div>
    </TextStyled>

    
    <ImageStyled>
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