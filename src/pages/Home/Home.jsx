
import React, { useEffect } from 'react'

import './Home.scss'
import { Header } from './../../cmps/Header/Header';
import { Background } from './../../cmps/Background/Background';
import { Skills } from './../../cmps/Skills/Skills';
import { Experience } from './../../cmps/Experience/Experience';
import { Footer } from './../../cmps/Footer/Footer';



export const Home = () => {


  return (
    <section className='home'>
      <Header></Header>
      <Background ></Background>
      <Skills ></Skills>
      <Experience ></Experience>
      <Footer ></Footer>
    </section>
  )
}

