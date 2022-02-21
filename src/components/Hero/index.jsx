import { HeroStyled, TextStyled, ImageStyled } from "./styles";

import Link from "next/link";
import Lottie from 'react-lottie';
import programming from '../../../public/img/lottie/programming.json'
//import programming from '../../../public/img/lottie/developer.json'

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
            Linkedin
          </a>
        </Link>

        <Link href="https://github.com/CarlosAmorim94" className="button">
          <a>
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