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
                  SOBRE CYBER-PSYCHONAUT.COM
              </h4>
              <hr/>
              <p>
                  Este es un sitio dedicado a la alimentación del Inconsciente Colectivo mediante la guerra memetica.
              </p>
          </div>
      </div>
    </div>
  );
};

export default AboutComponent;