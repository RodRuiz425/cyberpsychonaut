import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AvisoComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Abre el modal al cargar la página
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h5>¡AVISO! (+18)</h5>
            <p>Este sitio es exlcusivamente para mayores de edad. Te recordamos que el contenido de este sitio web puede abordar temas sensibles y estar sujeto a discusión sobre una amplia gama de perspectivas.
                Al presionar continuar confirmas que eres mayor de edad y asumes la responsabilidad de tus propias decisiones y acciones.
            </p>
            <div className='gridAviso'>
              <div className='gridAvisoItem'>
                <button onClick={closeModal} className='btnAviso'>Aceptar</button>
              </div>
              <div className='gridAvisoItem'>
                <NavLink to='/' className='gridAvistoItem'>
                  <button onClick={''} className='btnAviso'>Volver</button>
                </NavLink>
              </div>
            </div>
            
          </div>
        </div>
      )}
      {/* Resto del contenido de la página */}
    </div>
  );
};

export default AvisoComponent;
