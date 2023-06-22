import React from 'react';
// import Portada from '../img/portada4.png';
import PortadaGIF from '../img/portada.gif';

const CoverImage = () => {
  return (
    <div className="cover-image">
      {/* <img src={Portada} alt="Portada" /> */}
      <img src={PortadaGIF} alt="PortadaGIF" />
    </div>
  );
};

export default CoverImage;