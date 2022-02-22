import { useState } from "react";

import { HeaderStyled, Logo, Hamburguer, NavStyled } from "./styles";
import Image from "next/image";
import logo from '../../../public/img/tag.png'

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <HeaderStyled>
    <Logo>
      <Image
      src={logo}
      alt="Logotipo fechanto de tag"
      layout="responsive"
      /> 
    </Logo>

    <NavStyled show={showMenu}>
      <li>Sobre</li>
      <li>Experiência</li>
      <li>Projetos</li>
      <li>Contato</li>
    </NavStyled>

    <Hamburguer onClick={toogleMenu}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </Hamburguer>
    

  </HeaderStyled>
  )
}