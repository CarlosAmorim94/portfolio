import { HeaderStyled, Logo, Hamburguer, NavStyled } from "./styles";
import { useState } from "react";


export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <HeaderStyled>
    <Logo>
      Portfólio 
    </Logo>

    <NavStyled show={showMenu}>
      <li>Home</li>
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