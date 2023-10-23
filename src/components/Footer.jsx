import React from 'react';
import { Icon } from '@iconify/react';
import Imglogo from './images/imglogo.jpg';

const instagramURL = 'https://www.instagram.com/tempestad_oficial_/';
const facebookURL = 'https://www.facebook.com/GrupoTempestadLV/?locale=es_LA';
const youtubeURL = 'https://www.youtube.com/watch?v=gBCjO9BkctA';
const tiktokURL = 'https://www.tiktok.com/@grupotempestad';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-img">
                <br />
            <a href="/">
            <img className="imglogo" src={Imglogo} alt="Home" style={{width: '200px', height: '50px'}} />
            </a>
            <h5 style={{color: '#d6481e'}}>Grupo Tempestad © 2022</h5>
            </div>
            
            <div className="quick-links">
                <div className="links">
                    <a style={{color: '#d6481e'}} href="/Contrataciones">Contrataciones</a>
                </div>
                <div className="links">
                    <a style={{color: '#d6481e'}} href="/Calendario">Calendario</a>
                </div>
            </div>
            <br />
            <div className="icons">
            <Icon icon="skill-icons:instagram"  width= "50" onClick={() => window.open(instagramURL, '_blank')} />
            </div>
            <div className="icons">
            <Icon icon="logos:facebook" width= "50" onClick={() => window.open(facebookURL, '_blank')} />
            </div>
            <div className="icons">
            <Icon icon="mdi:youtube" width= "50" style={{color: 'red'}} onClick={() => window.open(youtubeURL, '_blank')} />
            </div>
            <div className="icons">
            <Icon icon="logos:tiktok-icon" width= "47" onClick={() => window.open(tiktokURL, '_blank')} />
            <br />
            </div>
            <br />
            <div className="contact-me">
            <p style={{color: '#cfd2d3'}}>Created by <a style={{color: '#d6481e'}} href="https://www.linkedin.com/in/salazar-jason/" target="_blank">Jason Salazar</a></p>
            </div>
            <br />
        </div>
        
    )
}