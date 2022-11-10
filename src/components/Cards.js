import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Our Works !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Wima.jpg'
              text='Brand Board - Identidad de Marca
              Las palabras claves para este proyecto son:
              Deportivo, urbano, moderno y minimalista'
              label='Wima Sportwear'
              path='/services'
            />
            <CardItem
              src='images/Tusol.jpg'
              text='Brand Board - Identidad de Marca'
              label='Tusol'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Skoll.jpg'
              text='Logo Design - *SKOLL*'
              label='SKOLL'
              path='/services'
            />
            <CardItem
              src='images/Vuelo.jpg'
              text='Brand Board - Vuelo Cerámica'
              label='Vuelo Cerámica'
              path='/products'
            />
            <CardItem
              src='images/Meganet.jpg'
              text='Brochure - Identidad de Marca. Las palabras claves para este proyecto son: 
              Conectividad, calidad y seguridad.'
              label='Meganet'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
