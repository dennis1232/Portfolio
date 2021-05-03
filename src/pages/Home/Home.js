
import React, { useEffect } from 'react'
import './Home.scss'
import { Header } from '../../cmps/Header/Header';
import { Background } from '../../cmps/Background/Background';
import { Skills } from '../../cmps/Skills/Skills';
import { Experience } from '../../cmps/Experience/Experience';
import { Footer } from '../../cmps/Footer/Footer';
import ProjectList from './../../cmps/Projects/ProjectList/ProjectList';
import { SocialIcon } from 'react-social-icons';



export const Home = () => {


  return (
    <section className='home'>
      <Header></Header>
      <Experience ></Experience>
      <Background ></Background>
      <Skills ></Skills>
      <ProjectList></ProjectList>
      <Footer ></Footer>
      <div className="footer-links line"  >
        <div className='icons'>

        <SocialIcon  url="https://www.linkedin.com/in/dennis-nemirovsky-308b19201/"></SocialIcon>

        <SocialIcon url="https://github.com/dennis1232"></SocialIcon>

        <SocialIcon url="https://www.instagram.com/dennis.nemirovsky/"></SocialIcon>

        <SocialIcon url="https://www.facebook.com/dennis.nemirovski/"></SocialIcon>
        <div className='line'></div>
        </div>
      </div>
    </section>
  )
}

