import { useState } from "react";
import { motion } from 'framer-motion'

import { HeaderStyled, Logo, Hamburguer, NavStyled, Content } from "./styles";
import Image from "next/image";
import logo from '../../../public/img/tag.png'
import Link from "next/link";

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <HeaderStyled>
    <Content>
      <Logo
        initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 80
        }}
      >
        <Link href="/"><a>
          <Image
          src={logo}
          alt="Logotipo fechanto de tag"
          layout="responsive"
          />
          </a>
        </Link>
      </Logo>

      <NavStyled show={showMenu}>
        <motion.li 
        initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.1
        }}><a href="#about">Sobre</a></motion.li>

        <motion.li
         initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.2
        }}><a href="#experiences">Experiência</a></motion.li>

        <motion.li
         initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.3
        }}><a href="#projects">Projetos</a></motion.li>
        <motion.li
         
         initial={{
          y: '-250',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: .5,
          type: 'spring',
          delay: 0.4
        }}><a href="#contact">Contato</a></motion.li>
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