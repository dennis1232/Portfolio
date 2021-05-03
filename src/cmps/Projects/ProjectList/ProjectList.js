import React,{useEffect} from 'react';
import { SocialIcon } from 'react-social-icons';
import BlueBeatBackGround from '../../../assets/projectImg/bluebeat.PNG'
import MineSweeperBackGround from '../../../assets/projectImg/MineSweeper.PNG'
import SherakonBackGround from '../../../assets/projectImg/Sherakon.PNG'
import MemeBackGround from '../../../assets/projectImg/MemeGen.PNG'
import appSusbgc from '../../../assets/projectImg/appSus.png'
import './ProjectList.scss'
import  AOS  from 'aos';
import "aos/dist/aos.css";

function ProjectList() {
    // useEffect(() => {
    //     // AOS.init({ duration: 10000})
    
    //   }, [])

    const projects = [

        {
            id: 1,
            name: 'BlueBeat',
            img: { BlueBeatBackGround },
            intro: 'Single page application - Spotify clone ',
            tech: 'Vue.js, VueX, SCSS, Node.js, MongoDB',
            link: 'https://bluebeat.herokuapp.com/',
            gitLink:'https://github.com/dennis1232/Bluebeat'
        },
        {
            id: 2,
            name: 'Sherakon',
            img: { SherakonBackGround },
            intro: 'A massive E-commerce app E2E',
            tech: 'React.js, Redux,Hooks,ContextAPI, stripe,Firebase',
            link: 'https://sherakon.herokuapp.com/',
            gitLink:'https://github.com/dennis1232/sherakon'
        },
        {
            id: 3,
            name: 'appSus',
            img: { appSusbgc },
            intro: 'A combination of 2 apps in one app',
            tech: 'HTML5, CSS3, JS, Vue.js',
            link: 'https://omerf18.github.io/Appsus/#/',
            gitLink:'https://github.com/omerf18/Appsus'
        }, {

            id: 4,
            name: 'MemeGenerator',
            img: { MemeBackGround },
            tech: 'HTML5, CSS3, JS',
            intro: 'Meme generator Written in vanilla using Canvas.',
            link: 'https://dennis1232.github.io/meme-generator/',
            gitLink:'https://github.com/dennis1232/meme-generator'
        },
        {
            id: 5,
            name: 'MineSweeper',
            img: { MineSweeperBackGround },
            intro: 'I build my own version to the known and the lovely game Minesweeper.',
            tech: 'HTML5, CSS3, JS',
            link: 'https://dennis1232.github.io/mine-sweeper/',
            gitLink:'https://github.com/dennis1232/mine-sweeper'
        }
    ]



    return (
        <section className='section' data-aos="fade-up">
            <div className="section-title ">Projects</div>
            <ul className='projects flex '>
                <li className='project-card '  >
                    <img className='background' src={BlueBeatBackGround} alt="" />

                    <h3 className='title'>{projects[0].name}</h3>
                    <p>{projects[0].intro}</p>
                    <p>{projects[0].tech}</p>
                    <div className='links'>
                        <a className='app-link' href={projects[0].link}>Check out</a>
                        <SocialIcon className='git-link' url={projects[0].gitLink}></SocialIcon>
                    </div>

                </li>
                <li className='project-card '>
                    <img className='background' src={SherakonBackGround} alt="" />

                    <h3 className='title'>{projects[1].name}</h3>
                    <p>{projects[1].intro}</p>
                    <p>{projects[1].tech}</p>
                    <div className='links'>
                        <a className='app-link' href={projects[1].link}>Check out</a>
                        <SocialIcon className='git-link' url={projects[1].gitLink}></SocialIcon>
                    </div>
                </li>
                <li className='project-card'>
                    <img className='background' src={appSusbgc} alt="" />
                    <h3 className='title'>{projects[2].name}</h3>
                    <p>{projects[2].intro}</p>
                    <p>{projects[2].tech}</p>
                    <div className='links'>
                        <a className='app-link' href={projects[2].link}>Check out</a>
                        <SocialIcon className='git-link' url={projects[2].gitLink}></SocialIcon>
                    </div>
                </li>
                <li className='project-card'>
                    <img className='background' src={MemeBackGround} alt="" />
                    <h3>{projects[3].name}</h3>
                    <p>{projects[3].intro}</p>
                    <p>{projects[3].tech}</p>
                    <div className='links'>
                        <a className='app-link' href={projects[3].link}>Check out</a>
                        <SocialIcon className='git-link' url={projects[3].gitLink}></SocialIcon>
                    </div>
                </li>
                <li className='project-card' >

                    <img className='background' src={MineSweeperBackGround} alt="" />
                    <h3 className='title'>{projects[4].name}</h3>
                    <p>{projects[4].intro}</p>
                    <p>{projects[4].tech}</p>
                    <div className='links'>
                        <a className='app-link' href={projects[4].link}>Check out</a>
                        <SocialIcon className='git-link' url={projects[4].gitLink}></SocialIcon>
                    </div>
                </li>
            </ul>
        </section >
    )
}

export default ProjectList
