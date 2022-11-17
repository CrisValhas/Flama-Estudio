import React, { useState } from 'react';
import Footer from '../../Footer';
import './mis15Morena.css';
// import PlaySound from './playSound';
import glitter from '../../../Media/images/glitter.mp4';
import starship from '../audio/Starship   We Built This City (Official Music Video).mp3';
import Portada from '../../../Media/images/MORENA-FOTOS1.png';
import Contacto from '../../../Media/images/CONTACTO.png';
import Direccion from '../../../Media/images/DIRECCION.png';
import Dresscode from '../../../Media/images/DRESSCODE.png';
import Playlist from '../../../Media/images/PLAYLIST.png';
import Regalo from '../../../Media/images/REGALO.png';
import Fecha from '../../../Media/images/FECHA.png';
import Asistencia from '../../../Media/images/ASISTENCIA.png';

function Morena() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Audio(starship);
  const playSound = () => {
    sound.paused ? sound.play() : sound.pause();
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <video src={glitter} autoPlay loop muted />
      <div className='morena-container'>
        <section className='morena-title' >
          {/* <p >Mis 15 Morena</p> */}
          <img className='morena-portada' src={Portada} />
        </section>
        <button className='playSound-button'
          onClick={() => playSound()}
        >
          {!isPlaying ? '⏵' : '⏸'}
        </button>
        {/* <PlaySound /> */}
        {/* <p className='morena-play'>Dale Play !</p> */}

        <section className='morena-date' >
          <img className='morena-date-img' src={Fecha} />
        </section>
        <section className='morena-text' >
          <p ></p>
        </section>
        <div className='morena-box'>
          <section className='morena-boxItem' >
            <div>
              {/* <p className='boxItem-title'> Salon </p> */}
              <img className='boxItem-title' src={Direccion} />
              <p className='boxItem-second'>Multiespacio Sr Frog's</p>
              <p >Guemes 1010, Pico Truncado, Provincia de Santa Cruz</p>
              <p className='boxItem-second'>21:00hs</p>
              <a className='boxItem-button' href="https://www.google.com/maps/place/Multiespacio+Sr+Frog's/@-46.8036757,-67.9638787,17.5z/data=!4m5!3m4!1s0x0:0xde2cc735ec0d2f92!8m2!3d-46.803477!4d-67.963781">¿Como llegar?</a>
            </div>
          </section>
          <section className='morena-boxItem' >
            <div>
              {/* <p className='boxItem-title'> Playlist </p> */}
              <img className='boxItem-title' src={Playlist} />
              <p className='boxItem-second'>¡Quiero que nos divirtamos juntos!</p>
              <p >Ayúdame desde ya a hacer la playlist de mi fiesta con las canciones infaltables, las que quieres oír y bailar</p>
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href='https://open.spotify.com/playlist/62XN10JNbnQtNDePedsOYZ?si=D0zXiP9nRoSAszmaS2TWFw&pt=949c0cf28246b4c8b8c3b565317fb217'>Playlist</a>
            </div>
          </section>
          <section className='morena-boxItem' >

            <img className='boxItem-title' src={Dresscode} />
            <p className='boxItem-second'>Elegante Sport</p>
            <p ></p>
            <p className='boxItem-second'></p>
            {/* <a className='boxItem-button' href='https://open.spotify.com/playlist/6aQAj0aiCPjeA7l8DJueqh?si=e0613f39ac05404e'>Playlist</a> */}
          </section>
          <section className='morena-boxItem' >
            <div>
              <img className='boxItem-title' src={Regalo} />
              <p className='boxItem-second'></p>
              <p >Lo que más quiero es compartir con vos nuestro gran día, pero si deseas regalarme algo podés hacer clic en el siguiente botón</p>
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href=''>Regalo</a>
            </div>
          </section>
        </div>
        <div className='morena-nonSection'>
          <section className='morena-boxItemNonSection' >
            <form className='morenaform'>
              <img className='boxItem-title' src={Asistencia} />
              <p className='form-declaration'>Para mí es muy importante que confirmes tu asistencia a mi cumple.</p>
              <input className='morena-input-name' type="text" placeholder='Nombre' />
              <div className='morena-checkbox'>
                <div className='morena-btns-confirm'>
                  <p className='form-second'>asistire</p>
                  <p className='form-second'>no asistire</p>
                </div>
                <div className='morena-btns-confirm'>
                  <input className='morena-input' type="checkbox" />
                  <input className='morena-input' type="checkbox" />
                </div>
              </div>
              <input className='morena-input-commments' type="text" placeholder='comentario alimenticio' />
            </form>
          </section>

          <section className='morena-boxItemNonSection' >
            <div>
              <img className='boxItem-title' src={Contacto} />
              {/* <p className='boxItem-second'>Elegante</p> */}
              <p >Para mí es muy importante que confirmes tu asistencia a mi cumple.</p>
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href='https://wa.me/542974434360'>Confirma acá</a>
            </div>
          </section>
          {/* <iframe
            style={{ 'border-radius': '12px', 'margin-top': '20px' }}
            src="https://open.spotify.com/embed/track/1x5gfSHfhWpMFKKqbuDe9G?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Morena;
