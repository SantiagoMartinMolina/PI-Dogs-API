import React from 'react';
import { StyledAbout } from './StyledAbout';

export default function About() {
    return (
        <StyledAbout>
            <div className='about'>
                <h1>PI-Dogs</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos ducimus sunt necessitatibus, omnis ipsam deserunt nihil dicta nisi vero aut dolores officia suscipit molestias vitae error consequatur culpa. Harum.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem architecto sapiente eaque assumenda maxime, minus officiis natus quaerat officia velit corporis, expedita dolorem magnam enim voluptas illum unde. Nihil, totam?</p>
            </div>
            <h1>Tecnologías utilizadas:</h1>
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
                <div>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="" />
                    <h1>GIT</h1>
                </div>
            </div>
            <h1>Contacto</h1>
            <div className='social-media'>

                <div>
                    <i class="fab fa-linkedin"></i>
                    <p>Linkedin</p>
                </div>
                <div>
                    <i class="fab fa-github-square"></i>
                    <p>Github</p>
                </div>
                <div>
                    <i class="fab fa-twitter-square"></i>
                    <p>Twitter</p>
                </div>
            </div>
            <div className='email'>
                <div>
                    <i class="fas fa-envelope-open-text"></i>
                    <p>E-mail</p>
                </div>
                <p>molina.santiago.martin@gmail.com</p>
            </div>
        </StyledAbout>
    )
}