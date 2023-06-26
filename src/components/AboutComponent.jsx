import React from 'react';
import AboutLogo from '../img/magickpsyop.png';

const AboutComponent = () => {
  return (
    <div className="about">
      <div className='aboutContainer'>
        <div className='aboutLogo'>
            <img src={AboutLogo} alt="PortadaGIF" />
          </div>
          <div className='aboutText'>
              <h4 className='aboutTitle'>
                  Acerca de CYBER-PSYCHONAUT.COM
              </h4>
              <hr/>
              <p>
              Este es un portal dedicado a la alimentación del Inconsciente Colectivo a través de la aplicación de la guerra memética y la difusión de contenidos de 
              interés psiconautico. A través de la exposición de estos contenidos se busca ampliar los horizontes de la comprensión colectiva, proporcionando una mayor 
              introspección y reflexión sobre las practicas psiconáuticas y mágico-religiosas.
              </p>
          </div>
      </div>
    </div>
  );
};

export default AboutComponent;