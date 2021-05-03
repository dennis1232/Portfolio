
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
        <div className="bottom">Designed and Developed by,Dennis Nemirovski <img className="emoji" src={horns} alt="" /><span>2021</span>
        </div>
      </div>
    
    </section>
  )
}

