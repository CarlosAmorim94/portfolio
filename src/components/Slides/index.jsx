import Image from 'next/image';

import embraer from '../../../public/img/embraer.jpg'
import mara from '../../../public/img/mara.png'
import doceamor from '../../../public/img/doceamor.png'

import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carrousel } from './styles';

import { Slide } from 'react-slideshow-image';

export const Slides = () => {
  const fadeImages = [
    embraer,
    mara,
    doceamor,
  ];

  const fadeProperties = {
    duration: 3000,
    canSwipe: false,
  };

  return (
    <Carrousel>
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div>
              <Image src={fadeImages[0]}
              alt="Foto de perfil"
              layout="responsive" />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <Image src={fadeImages[1]}
              alt="Foto de perfil"
              layout="responsive" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <Image src={fadeImages[2]}
              alt="Foto de perfil"
              layout="responsive" />
            </div>
            <p>Third Slide</p>
          </div>
        </Slide>
    </Carrousel>
  );
};