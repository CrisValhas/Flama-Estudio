import React from 'react';
import '../App.css';
import './HeroSection.css';
import Logo from '../Media/images/Flama-Estudio-Logo.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='hero-logo' src={Logo} alt="Flama Estudio"/>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <h1>Graphic Design</h1> */}
      {/* <p>What are you waiting for?</p> */}
      <div className='hero-btns'>
        <a href ="https://www.behance.net/FlamaEstudio" className="hero-button">Behance</a>
        <a href ="https://www.instagram.com/flamaestudio_/" className="hero-button">Instagram</a>
        <a href ="https://wa.me/541155029251" className="hero-button">Whatsapp</a>
        {/* <a href ="mailto: flama.dg.estudio@gmail.com" className="hero-button">E-mail</a> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Us
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
