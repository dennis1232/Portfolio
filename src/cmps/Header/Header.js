
import React, { useEffect } from 'react'

import './Header.scss'
import wavingHand from '../../assets/waving-hand.png'
import manTech from '../../assets/man-tech.webp'
import pointingRight from '../../assets/pointing-right.png'
import AOS from "aos"

import "aos/dist/aos.css"
export const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh();

  }, [])

  return (
    <section className="header">
      <h1 className="intro-hello">Hello! <img className="waving-hand emoji" src={wavingHand} alt="" /></h1>
      <h2 data-aos="fade-right" className="intro-tagline">
        I am <span className="name"> Dennis Nemirovski,</span> a Fullstack / FrontEnd Developer specialized in creating attractive interfaces and interactive experiences <img className="emoji" src={manTech} alt="" />
      </h2>
      <h3 data-aos="fade-right" className="intro-contact"><span> Get in touch</span><img className="emoji" src={pointingRight} alt="" /><a className="email" href="mailto:DennisNemirovski@gmail.com">DennisNemirovski@gmail.com</a></h3>
      <i href='.experience' class="fas fa-angle-down"> </i>
    </section>
  )
}

