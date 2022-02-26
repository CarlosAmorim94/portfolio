import { AboutStyled, ImageStyled, TextArea, } from "./styles";
import Link from "next/link";

import Image from 'next/image'
import profilePicture from '../../../public/img/foto.png'
import downloadIcon from '../../../public/img/icons/download.svg'


export const About = () => {


  return (
  <AboutStyled id="about">
    <ImageStyled>
      <Image
      className="neon"
      src={profilePicture}
      alt="Foto de perfil"
      layout="responsive"
      />
    </ImageStyled>

    <TextArea>
      <h1 >Sobre</h1>

      <p>
      Desde pequeno sempre fui <span>fascinado por tecnologia</span>, meus olhos brilhavam quando um software ou site inovador/facilitador era lançado! Faz um tempo que dei asas ao sonho de me tornar um desenvolvedor que inova e facilita o dia a dia das pessoas!
      </p>

      <p>
      Me considero <span>ágil, criativo</span>, consistente em aprender e me <span>adaptar as mudança</span>, pronto para superar qualquer desafio! Sempre me dizem que tenho facilidade para fazer novas amizades e lidar com pessoas.
      </p>

      <p>
      Se eu pudesse me definir em 3 palavras, certamente seriam: 
      
      <span>otimista, criativo e esforçado!</span>
  
      </p>

      <div>
        <Link 
        href="https://drive.google.com/file/d/1tU-iZOQbjmGLyKhq09LJeiupnGUaoAo6/view?usp=sharing"
         >
            <a target="_blank">
              <Image src={downloadIcon} alt="LinkedIn icon"/>
              Curriculo
            </a>
        </Link>
      </div>
    </TextArea>

    
  </AboutStyled>
  )
}