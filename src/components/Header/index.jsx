import { useState } from "react";

import { HeaderStyled, Logo, Hamburguer, NavStyled, Content } from "./styles";
import Image from "next/image";
import logo from '../../../public/img/tag.png'

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <HeaderStyled>
    <Content>
      <Logo>
        <Image
        src={logo}
        alt="Logotipo fechanto de tag"
        layout="responsive"
        /> 
      </Logo>

      <NavStyled show={showMenu}>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experiences">Experiência</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </NavStyled>

      <Hamburguer onClick={toogleMenu}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </Hamburguer>
    </Content>
  </HeaderStyled>
  )
}