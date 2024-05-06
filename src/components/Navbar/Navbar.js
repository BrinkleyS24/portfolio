import React from 'react';
import './Navbar.scss';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ setActiveSection }) => { // Receive setActiveSection as prop
    const handleLinkClick = (section) => {
        setActiveSection(section); // Update activeSection state when link is clicked
    };

    return (
        <div className="header">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                <a href="#hero" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
                    <h3>Meet the Developer</h3>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#about" className="nav-link px-2 link-light" onClick={() => handleLinkClick('about')}>About</a></li>
                    <li><a href="#projects" className="nav-link px-2 link-light" onClick={() => handleLinkClick('projects')}>Projects</a></li>
                    <li><a href="#tech" className="nav-link px-2 link-light" onClick={() => handleLinkClick('technologies')}>Technologies</a></li>
                    <li><a href="#contact" className="nav-link px-2 link-light" onClick={() => handleLinkClick('contact')}>Contact Me</a></li>
                </ul>

                <div className='col-md-3 text-end' >
                    <a href="https://www.facebook.com/stacey.brinkley.94" className='icons'  >
                        <FontAwesomeIcon icon={faFacebook} size="2x" className='facebook' />
                    </a>
                    <a href="https://www.linkedin.com/in/stacey-brinkley-688b0520b/" className='icons' >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className='linkedin' />
                    </a>
                    <a href="https://github.com/BrinkleyS24" className='icons'>
                        <FontAwesomeIcon icon={faGithub} size="2x" className='github'/>
                    </a>
                </div>

            </header>
        </div>
    )
}

export default Navbar;
