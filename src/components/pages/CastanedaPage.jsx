import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/CarlosCastaneda/DALL·E 2023-03-09 14.15.59 - hindu yantra from medieval catholic manuscript.png'),
  },  
  {
    original: require('../../img/Pages/CarlosCastaneda/DALL·E 2022-08-10 13.24.52 - Interdimensional Entity.png'),
  },
  {
    original: require('../../img/Pages/CarlosCastaneda/DALL·E 2022-08-10 16.00.17 - hyperspace platonic solids.png'),
  },
  {
    original: require('../../img/Pages/CarlosCastaneda/DALL·E 2023-04-14 19.46.48 - Interdimensional Entity.png'),
  },
  {
    original: require('../../img/Pages/CarlosCastaneda/octaviopaz1.png'),
  },
];

 const CastanedaPage = () => (
  <div className='pageContainer'>
    <div className='pageSec'>
        <h1>Carlos Castaneda</h1>
        <hr/>
        <div className='GalleryContainer'>
        <ImageGallery 
         items={images} 
         showPlayButton={false}
         disableThumbnailScroll={false}
        />
        </div>
        <br/>
    </div>
    <div className='pageSec'>
        <h2>Videos Recomendados</h2>
        <hr/>
        <div className='yVideo'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xJAg-jmMvTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
        </div>
        <h4>LAS ENSEÑANZAS DE CARLOS CASTANEDA, Negro sobre Blanco, TVE 2001</h4>
        <p className='textoVideo'> 
        En este debate, moderado por FERNANDO SÁNCHEZ DRAGÓ, participan los siguientes contertulios: OLVIDO GARA "ALASKA" (musicóloga, cantante y apasionada del chamanismo 
        vinculado con Castaneda), JOSÉ MARÍA POVEDA (profesor de psiquiatría y autor del libro "Chamanismo. El arte natural de curar"), SANTIAGO TRANCÓN (escritor, profesor 
        de arte dramático y practicante de pases mágicos), CONCHA LABARTA (redactora-jefe de la revista "Más Allá", presidenta de la Asociación para el Estudio de la Percepción
         y seguidora de Carlos Castaneda), PEPE RIVAS (escritor y fundador de la revista "Ajoblanco") y JUANJO PIÑEIRO (escritor y psiconauta). 
        </p>
        <br/>

        <hr/>
        <div className='yVideo'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PvzLKusEz8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
        </div>
        <h4>Documental Carlos Castaneda, BBC 2006</h4>
        <p className='textoVideo'> 
            Documental producido por la cadena britanica BBC sobre Carlos Castaneda en donde participan investigadores, ex discipulos, e incluso el mismo hijo de Castaneda.
        </p>
    </div>
  </div>

 );
 
 export default CastanedaPage;