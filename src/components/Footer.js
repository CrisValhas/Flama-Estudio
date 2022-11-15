import React from 'react';
import './Footer.css';
import behanceIcon from '../Media/images/behance-icon.png';
import whatsappIcon from '../Media/images/whatsapp-icon.png';
import igIcon from '../Media/images/ig-icon.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>FlamaEstudio © 2022</small>
          <div className='social-icons'>
            <a  href="https://www.behance.net/FlamaEstudio"><img className='footer-icon' src={behanceIcon} alt="behance" /></a>
            <a  href="https://www.instagram.com/flamaestudio_/"><img className='footer-icon' src={igIcon} alt="instagram" /></a>
            <a  href="https://wa.me/541155029251"><img className='footer-icon' src={whatsappIcon} alt="whatsapp" /></a>
            {/* <a title="e-mail" href="mailto: flama.dg.estudio@gmail.com"><img src="casarural.jpg" alt="Los Tejos" /></a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
