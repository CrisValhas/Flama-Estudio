import React, { useState } from 'react';
import Footer from '../../Footer';
import './mis15Morena.css';
// import PlaySound from './playSound';
import glitter from '../../../Media/images/glitter.mp4';
import starship from '../audio/Starship   We Built This City (Official Music Video).mp3';


function Morena() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Audio(starship);
  const playSound = () => {
    sound.paused ? sound.play(): sound.pause();
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <video src={glitter} autoPlay loop muted />
      <div className='morena-container'>
        <button className='playSound-button'
          onClick={() => playSound()}
        >
          {!isPlaying ? '⏵' : '⏸'}
        </button>
        {/* <PlaySound /> */}
        <p className='morena-play'>Dale Play !</p>
        <section className='morena-title' >
          <p >Mis 15 Morena</p>
        </section>
        <section className='morena-date' >
          <p >25 de marzo de 2022</p>
        </section>
        <section className='morena-text' >
          <p >Hay momentos inolvidables que se atesorando el corazón para siempre, por esa razón, quiero que compartas conmigo este día tan especial</p>
        </section>
        <div className='morena-box'>
          <section className='morena-boxItem' >
            <div>
              <p className='boxItem-title'> Salon </p>
              <p className='boxItem-second'>Janos Eventos</p>
              <p >Mariano Pelliza 310, Olivos, Provincia de Buenos Aires</p>
              <p className='boxItem-second'>21:00hs</p>
              <a className='boxItem-button' href='https://www.google.com.ar/maps/place/Janos+Olivos/@-34.5023875,-58.4784684,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb13bf2ea26c5:0x7995beaf3380bd87!8m2!3d-34.5023875!4d-58.4784684?hl=es&authuser=0'>¿Como llegar?</a>
            </div>
          </section>
          <section className='morena-boxItem' >
            <div>
              <p className='boxItem-title'> Playlist </p>
              <p className='boxItem-second'>¡Quiero que nos divirtamos juntos!</p>
              <p >Ayúdame desde ya a hacer la playlist de mi fiesta con las canciones infaltables, las que quieres oír y bailar</p>
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href='https://open.spotify.com/playlist/6aQAj0aiCPjeA7l8DJueqh?si=e0613f39ac05404e'>Playlist</a>
            </div>
          </section>
          <section className='morena-boxItem' >
            <div>
              <p className='boxItem-title'> Instagram </p>
              <p className='boxItem-second'>#Mis15Morena</p>
              <p >Usá mi #Mis15Morena para subir las fotos de recuerdos que quieras compartir conmigo y las que saques en el cumple</p>
              <p className='boxItem-second'></p>
              {/* <a className='boxItem-button' href='https://open.spotify.com/playlist/6aQAj0aiCPjeA7l8DJueqh?si=e0613f39ac05404e'>Playlist</a> */}
            </div>
          </section>
          <section className='morena-boxItem' >
            <div>
              <p className='boxItem-title'> Regalo </p>
              <p className='boxItem-second'></p>
              <p >Lo que más quiero es compartir con vos nuestro gran día, pero si deseas regalarme algo podés hacer clic en el siguiente botón</p>
              <p className='boxItem-second'></p>
              {/* <a className='boxItem-button' href='https://open.spotify.com/playlist/6aQAj0aiCPjeA7l8DJueqh?si=e0613f39ac05404e'>Playlist</a> */}
            </div>
          </section>
        </div>
        <div className='morena-nonSection'>
          <section className='morena-boxItemNonSection' >

            <p className='boxItem-title'> DressCode </p>
            <p className='boxItem-second'>Elegante</p>
            {/* <p >Lo que más quiero es compartir con vos nuestro gran día, pero si deseas regalarme algo podés hacer clic en el siguiente botón</p> */}
            <p className='boxItem-second'></p>
            {/* <a className='boxItem-button' href='https://open.spotify.com/playlist/6aQAj0aiCPjeA7l8DJueqh?si=e0613f39ac05404e'>Playlist</a> */}
          </section>
          <section className='morena-boxItemNonSection' >
            <div>
              <p className='boxItem-title'> Confirmacion de asistencia </p>
              {/* <p className='boxItem-second'>Elegante</p> */}
              <p >Para mí es muy importante que confirmes tu asistencia a mi cumple.</p>
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href='https://wa.me/541155029251'>Confirma acá</a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Morena;
