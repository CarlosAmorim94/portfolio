import Image from 'next/image';

import embraer from '../../../public/img/embraer.jpg'
import mara from '../../../public/img/mara.png'
import doceamor from '../../../public/img/doceamor.png'

import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Carrousel, Container } from './styles';

import { Slide } from 'react-slideshow-image';

export const Experiences = () => {
  const fadeImages = [
    embraer,
    mara,
    doceamor,
  ];

  const fadeProperties = {
    duration: 5000,
    canSwipe: false,
  };

  return (
    <Container id="experiences">

      <h1>Experiências e Freelances</h1>

      <Carrousel>
          <Slide {...fadeProperties}>
            <div className="each-fade">
              <div className="text">
                <h2>Embraer</h2>
                <p>
                Estou desenvolvendo um sistema para automatização do processo em que atuo.
                </p>
                <p>
                Além de executar minhas funções, <span>ganhei vários prêmios de melhoria</span> de processo no
                “Programa boa ideia”
                </p> 
                <p>
                participando ativamente de Kaizens onde elaborava mapeamento de
                fluxo de valor, analisava erros em processos e suas soluções, atuei 2 anos na função de
                “Agente de melhoria contínua”</p>
                <p> onde fui responsável direto por coordenar e executar essas
                melhorias junto com a equipe.
                </p>

                <div>
                  2013 - atualmente
                </div>
              </div>
              <div className="image">
                <Image src={fadeImages[0]}
                alt="Foto de perfil"
                layout="responsive" />
              </div>
            </div>

            <div className="each-fade">
               <div className="text">
                  <h2>Mara Queijos</h2>
                  <p>
                  SPA desenvolvido com ReactJs para exibição dos produtos e contato com a empresa.
                  </p>
                  <p>
                  Fui responsável pelo Desenvolvimento do 0, desde UI, código e deploy.
                  </p>
                <div>
                  Freelance - Dez/21 - Jan/22
                </div>
              </div>
              <div className="image">
                <Image src={fadeImages[1]}
                alt="Foto de perfil"
                layout="responsive" />
              </div>
            </div>

            <div className="each-fade">
              <div className="text">
                <h2>Doce Amor - Bolos</h2>
                <p>
                SPA desenvolvido com ReactJs para exibição dos produtos e contato com a empresa.
                </p>
                <p>
                Fui responsável pelo Desenvolvimento do 0, desde UI, código e deploy.
                </p>
                <div>
                  Freelance - Out/21 - Nov/21
                </div>
              </div>
              <div className="image">
                <Image src={fadeImages[2]}
                alt="Foto de perfil"
                layout="responsive" />
              </div>
            </div>
          </Slide>
      </Carrousel>
    </Container>
  );
};