import { HeroStyled, TextStyled, ImageStyled } from "./styles";

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


      </div>
    </TextStyled>

    
    <ImageStyled>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: programming,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
        />
    </ImageStyled>
    
  </HeroStyled>
  )
}