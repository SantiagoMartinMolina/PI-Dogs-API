import React from 'react';
import { StyledAbout } from './StyledAbout';

export default function About() {
    return (
        <StyledAbout>
            <div className='about'>
                <h1>PI-Dogs</h1>
                <p>This project was created as part of my fullstack developer formation, while attending the <a href='https://www.soyhenry.com/' target='_blank' rel='noopener noreferrer'>Henry bootcamp</a>. In order to map all the different breeds, this app consumes data from <a href='https://thedogapi.com/' target='_blank' rel='noopener noreferrer'>the dogs API</a>. It is also possible to create a new dog breed, entering a name, weight, height, life span and temperaments.</p>
                <p>Any feedback you can provide will be greatly appreciated. Thank you, and don't forget to create your own breed!</p>
            </div>
            <h1 className='tech-title'>Used technologies:</h1>
            <div className='tech-container'>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                    <h1>Javascript</h1>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                    <h1>HTML</h1>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                    <h1>CSS</h1>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                    <h1>React</h1>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                    <h1>Redux</h1>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                    <h1>Express</h1>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                    <h1>PostgreSQL</h1>
                </div>
            </div>
            <h1>Contact</h1>
            <div className='social-media'>

                <div>
                    <i class="fab fa-linkedin"></i>
                    <p><a href="https://www.linkedin.com/in/santiago-molina-dev/" target='_blank' rel='noopener noreferrer'>Linkedin</a></p>
                </div>
                <div>
                    <i class="fab fa-github-square"></i>
                    <p><a href="https://github.com/SantiagoMartinMolina" target='_blank' rel='noopener noreferrer'>Github</a></p>
                </div>
                <div>
                    <i class="fab fa-twitter-square"></i>
                    <p><a href="https://twitter.com/santidev7" target='_blank' rel='noopener noreferrer'>Twitter</a></p>
                </div>
            </div>
            <div className='email'>
                <div>
                    <i class="fas fa-envelope-open-text"></i>
                    <p>E-mail</p>
                </div>
                <a href='mailto:molina.santiago.martin@gmail.com' >molina.santiago.martin@gmail.com</a>
            </div>
        </StyledAbout>
    )
}