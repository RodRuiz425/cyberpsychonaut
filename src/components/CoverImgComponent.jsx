import React from 'react';
import Portada from '../img/portada4.png';

const CoverImage = () => {
  return (
    <div className="cover-image">
      <img src={Portada} alt="Portada" />
    </div>
  );
};

export default CoverImage;