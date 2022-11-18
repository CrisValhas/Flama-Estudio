import React, { useState } from 'react';
import Footer from '../../Footer';
import './mis15Morena.css';
import glitter from '../../../Media/images/glitter.mp4';
import starship from '../audio/Audio-background.mp3';
import Portada from '../../../Media/images/MORENA-PORTADA.png';
import Contacto from '../../../Media/images/CONTACTO.png';
import Direccion from '../../../Media/images/DIRECCION.png';
import Dresscode from '../../../Media/images/DRESSCODE.png';
import Playlist from '../../../Media/images/PLAYLIST.png';
import Regalo from '../../../Media/images/REGALO.png';
import Fecha from '../../../Media/images/FECHA.png';
import Asistencia from '../../../Media/images/ASISTENCIA.png';
import useSound from 'use-sound';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import playico from '../../../Media/images/icons8-play-30.png';
import pauseico from '../../../Media/images/icons8-pausa-30.png';

function Morena() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playSound = () => {
    isPlaying === false ? play() : pause();
    setIsPlaying(!isPlaying);
  }
  const [play, { pause }] = useSound(starship);
  const [form, setForm] = useState(
    {
      user_email:"l.o.r.e@live.com.ar",
      to_name:"MORENA",
      nombre: "",
      asistire: "",
      message: ""
    }
  );
  const asistencia = e => {
    if (e.target.name === "nombre"){
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      return
    }
    if (e.target.name === "message"){
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      return
    }
    if (form.asistire !== "") {
      document.getElementById('no asistire').disabled = false;
      document.getElementById('asistire').disabled = false;
      setForm({
        ...form,
        [e.target.name]: "",
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.id,
      });
      if (e.target.id === "asistire") {
        document.getElementById('no asistire').disabled = true;
      }
      if (e.target.id === "no asistire") {
        document.getElementById('asistire').disabled = true;
      }
    }

  }
  const sendEmail = e => {
    e.preventDefault();
    emailjs.send(
      'service_y5elzjb', 
      'template_q2ligwe',
      form,
      'tXNUd1lU69kvU6kSw', 
      )
      .then((result) => {
          console.log(result.text);
          window.alert("su Confirmacion se envio correctamente")
      }, (error) => {
          console.log(error.text);
          window.alert("ocurrio un error al enviar su confirmacion")
      });
      
  };
  const [isVisible,setIsVisible] = useState(false);
  const dropDown = ()=>{
    setIsVisible(!isVisible)
  }
  return (
    <>
      <video src={glitter} autoPlay loop muted />
      <div className='morena-container'>
        <section className='morena-title'  >
          <img className='morena-portada' src={Portada} alt="portada" />
        </section>
        <button className='playSound-button'
          onClick={() => playSound()}
        >
          {!isPlaying ? 'Play' : 'Pause'}
        </button>
        <section className='morena-date' >
          <img className='morena-date-img' src={Fecha} />
        </section>

        <div className='morena-box'>
          <section className='morena-boxItem' >
            <div>
              <img className='boxItem-title' src={Direccion} />
              <p className='boxItem-second'>Multiespacio Sr Frog's</p>
              <p >Guemes 1010, Pico Truncado, Provincia de Santa Cruz</p>
              <p className='boxItem-second'>21:00hs</p>
              <a className='boxItem-button' href="https://www.google.com/maps/place/Multiespacio+Sr+Frog's/@-46.8036757,-67.9638787,17.5z/data=!4m5!3m4!1s0x0:0xde2cc735ec0d2f92!8m2!3d-46.803477!4d-67.963781">¿Como llegar?</a>
            </div>
          </section>
          <section className='morena-boxItem' >
            <div>
              <img className='boxItem-title' src={Playlist} alt="Playlist" />
              <p className='boxItem-second'>Ayudame a armar la playlist de la fiesta</p>
              <p ></p>
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href='https://open.spotify.com/playlist/62XN10JNbnQtNDePedsOYZ?si=D0zXiP9nRoSAszmaS2TWFw&pt_success=1&nd=1'>Spotify</a>
            </div>
          </section>
          <section className='morena-boxItem' >
            <img className='boxItem-title' src={Dresscode} />
            <p className='boxItem-second'>Elegante Sport</p>
            <p ></p>
            <p className='boxItem-second'></p>
          </section>
          <section className='morena-boxItem' >
            <div>
              <img className='boxItem-title' src={Regalo} />
              <p className='boxItem-second'></p>
              <p >El mejor regalo para mi es tu compañía, pero si quieres obsequiarme algo</p>
              <p className='boxItem-second'></p>
              <button onClick={dropDown} className='boxItem-button' href=''>CBU</button>
              <div className='morena-span'>
              {
              isVisible &&
              
              <span >CBU 0000007900234841773845</span> }
              </div>
              
            </div>

          </section>
        </div>

        <div className='morena-nonSection'>
          <section className='morena-boxItemNonSection' >
            <form className='morenaform'>
              <img className='boxItem-title' src={Asistencia} />
              <p className='form-declaration'>Es muy importante que confirmes tu asistencia</p>
              <input className='morena-input-name' name="nombre" value={form.nombre} type="text" placeholder='Nombre' onChange={asistencia} />
              <div className='morena-checkbox'>
                <div className='morena-btns-confirm'>
                  <p className='form-second'>Asistiré</p>
                  <p className='form-second'>No asistiré</p>
                </div>
                <div className='morena-btns-confirm'>
                  <input required className='morena-input' type="checkbox" name="asistire" id="asistire" onChange={asistencia} />
                  <input required className='morena-input' type="checkbox" name="asistire" id="no asistire" onChange={asistencia} />
                </div>
              </div>
              <p className='form-declaration'> En caso de tener alguna restricción o preferencia alimentaria avisanos</p>
              <input className='morena-input-commments' type="text" value={form.message} name="message"  onChange={asistencia} />
              <button className="boxItem-button" onClick={sendEmail}>Enviar</button>
            </form>
          </section>

          <section className='morena-boxItemNonSection' >
            <div>
              <img className='boxItem-title' src={Contacto} />
              {/* <p >Es muy importante que confirmes tu asistencia</p> */}
              <p className='boxItem-second'></p>
              <a className='boxItem-button' href='https://wa.me/542974434360'>Whatsapp</a>
            </div>
          </section>
          {/* <audio id="musica" loop="">
            <source src={starship} type="audio/mp3"/>
          </audio> */}
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
