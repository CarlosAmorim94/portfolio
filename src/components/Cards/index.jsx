import project1 from '../../../public/img/projects/pokenext.png'
import project2 from '../../../public/img/projects/dtmoney.png'
import project3 from '../../../public/img/projects/netflix.png'
import project4 from '../../../public/img/projects/ignews.png'
import github from '../../../public/img/icons/GitHub.svg'


import Image from "next/image"
import Link from 'next/link'
import { Content, Description, ImageStyled } from "./styles"

export const Cards = () => {

  const cards = [
    {img: project1, name: "PokeNext", link: "https://github.com/CarlosAmorim94/PokeNext", tech: "NextJs, API, Styled-components, "},
    {img: project2, name: "DT-Money", link: "https://github.com/CarlosAmorim94/DTMoney", tech: "ReactJs, Typescript, API, Styled-components, ContexAPI, MirageJs"},
    {img: project3, name: "Clone da Netflix", link: "https://github.com/CarlosAmorim94/Clone-Netflix", tech: "ReactJs, API, CSS"},
    {img: project4, name: "Ig-News", link: "https://github.com/CarlosAmorim94/IG-News", tech: "NextJs, Typescript, SCSS, Stripe, FaunaDB, auth"},
  ]

  return (
    cards.map((card, key) => (
      <Content key={key}
        initial={{ y: 20, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{delay: .5, duration: 1}}
        viewport={{ once: true }} // only one time
      >

        <ImageStyled>

          <Image src={card.img}
          alt="projects"
          layout="responsive"
          />

        </ImageStyled>

        <Description>

          <h2>Nome: <span>{card.name}</span></h2>

          <p>
            Tecnologias utilizadas: <span>{card.tech}</span>
          </p>

          <Link href={card.link}>
            <a target="_blank">
              <Image src={github} alt="GitHub icon"/>
              <span>Projeto Completo</span>
            </a>
          </Link>

        </Description>

    </Content>
    ))

  )
}