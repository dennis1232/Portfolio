
import React,{useEffect} from 'react'
import { SocialIcon } from 'react-social-icons';
import AOS from 'aos'
import "aos/dist/aos.css";

import './Footer.scss'
import horns from '../../assets/sign-of-the-horns.png'

export const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 3000})

  }, [])

  return (
    <section className="footer">
      <div className="footer-copyright">
        <div className="top">Designed and Developed by,</div>
        <div className="bottom">Dennis Nemirovski <img className="emoji" src={horns} alt="" /><span>2021</span>
        </div>
      </div>
      <div className="footer-links"  >
        <SocialIcon  url="https://www.linkedin.com/in/dennis-nemirovsky-308b19201/"></SocialIcon>

        <SocialIcon url="https://github.com/dennis1232"></SocialIcon>

        <SocialIcon url="https://www.instagram.com/dennis.nemirovsky/"></SocialIcon>

        <SocialIcon url="https://www.facebook.com/dennis.nemirovski/"></SocialIcon>
      </div>
    </section>
  )
}

