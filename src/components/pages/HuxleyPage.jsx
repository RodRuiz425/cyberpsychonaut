import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  // {
  //   original: require('../../img/Pages/AldousHuxley/aldoushuxley1.png'),
  //   thumbnail: require('../../img/Pages/AldousHuxley/aldoushuxley1.png'),
  // },
  {
    original: require('../../img/Pages/AldousHuxley/DALL·E 2022-12-17 01.43.41 - hermes trismegistus in fractal palace.png'),
    thumbnail: require('../../img/Pages/AldousHuxley/DALL·E 2022-12-17 01.43.41 - hermes trismegistus in fractal palace.png'),
  },
  {
    original: require('../../img/Pages/AldousHuxley/DALL·E 2023-02-24 23.17.48.png'),
    thumbnail: require('../../img/Pages/AldousHuxley/DALL·E 2023-02-24 23.17.48.png'),
  },
];

 const HuxleyPage = () => (
    <div className='pageContainer'>
        <h1>Aldous Huxley</h1>
        <hr/>
        <ImageGallery 
         items={images} 
         showPlayButton={false}
         disableThumbnailScroll={false}
        />
        <br/>
        <h2>Videos</h2>
        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JH15WHCC0Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='textoVideo'>Novelista, ensayista y místico intelectual, Aldous Leonard Huxley nació en Inglaterra en 1894 en el seno de una destacada familia de literatos y científicos. 
          Entre sus obras más importantes figuran: Las puertas de la percepción. Cielo e infierno, Un mundo feliz, La filosofía perenne, La isla, El tiempo debe detenerse, 
          Los demonios de Loudun y Contrapunto. </p>
   </div>
 );
 
 export default HuxleyPage;