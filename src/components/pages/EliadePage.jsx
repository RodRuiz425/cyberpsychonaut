import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/MirceaEliade/DALL·E 2023-03-09 13.56.44 - goetia manuscript hindu mandala.png'),
  },
  {
    original: require('../../img/Pages/MirceaEliade/0_moebius art theurgy_esrgan-v1-x2plus (2).png'),
  },
  {
    original: require('../../img/Pages/MirceaEliade/DALL·E 2023-03-19 20.32.58 - masonic temple fractal.png'),
  },
  {
    original: require('../../img/Pages/MirceaEliade/DALL·E 2023-04-14 19.53.39 - A gate into hyperspace.png'),
  },
  {
    original: require('../../img/Pages/MirceaEliade/DALL·E 2023-04-14 20.24.35 - macrocosm microcosm medieval diagram.png'),
  },
  {
    original: require('../../img/Pages/MirceaEliade/mirceaeliade1.png'),
  },
];

 const EliadePage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Mircea Eliade</h1>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UnId4rdg_pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h4>Mircea Eliade</h4>
          </div>
          <p className='textoVideo'>
          Mircea Eliade es una de las figuras más interesantes de la cultura contemporánea. Es uno de los grandes historiadores de las religiones y del pensamiento oriental, con 
          una biografía realmente fascinante. Entre sus libros figuran: "La búsqueda", "El chamanismo y las técnicas arcaicas del éxtasis", "Historia de las creencias y de las ideas 
          religiosas", "Iniciaciones místicas", "El mito del eterno retorno", "Imágenes y símbolos", etc
          </p>
      </div>
   </div>
 );
 
 export default EliadePage;