import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  // {
  //   original: require('../../img/Pages/AldousHuxley/aldoushuxley1.png'),
  //   thumbnail: require('../../img/Pages/AldousHuxley/aldoushuxley1.png'),
  // },
  {
    original: require('../../img/Pages/CarlJung/DALL·E 2022-10-09 22.59.20 - Pyschonaut DMT vision.png'),
    thumbnail: require('../../img/Pages/CarlJung/DALL·E 2022-10-09 22.59.20 - Pyschonaut DMT vision.png'),
  },
  {
    original: require('../../img/Pages/CarlJung/DALL·E 2023-02-24 23.13.17 - fractal kabbalah.png'),
    thumbnail: require('../../img/Pages/CarlJung/DALL·E 2023-02-24 23.13.17 - fractal kabbalah.png'),
  },
  {
    original: require('../../img/Pages/CarlJung/DALL·E 2023-04-11 01.20.56 - sacred geometry fractal hd.png'),
    thumbnail: require('../../img/Pages/CarlJung/DALL·E 2023-04-11 01.20.56 - sacred geometry fractal hd.png'),
  },
  {
    original: require('../../img/Pages/CarlJung/DALL·E 2023-04-14 20.17.24 - medieval manuscript of alchemy.png'),
    thumbnail: require('../../img/Pages/CarlJung/DALL·E 2023-04-14 20.17.24 - medieval manuscript of alchemy.png'),
  },
  {
    original: require('../../img/Pages/CarlJung/carljung1.png'),
    thumbnail: require('../../img/Pages/CarlJung/carljung1.png'),
  },
];

 const JungPage = () => (
    <div className='pageContainer'>
        <h1>Carl Gustav Jung</h1>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0eMarN-Qxas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>Carl Gustav Jung, "Señor del mundo subterráneo"</h3>
        </div>
        <p className='textoVideo'>
        Carl Gustav Jung es una de las grandes figuras de la psicología y psiquiatría contemporáneas. Quizá el más interesante discípulo de Sigmund Freud. Influyentes en sus 
        ideas fueron sus viajes por África del Norte, Estados Unidos y Kenya, así como su relación con el sinólogo Richard Wilhelm, el indólogo Heinrich Zimmer y el filólogo y 
        mitólogo Karl Kerenyi. Entre sus libros figuran: Sobre cosas que se ven en los cielos, Recuerdos, sueños y pensamientos, Sincronicidad, Psicología y alquimia, 
        Psicología y Religión, Simbología del espíritu y Símbolos de Transformación. 
        </p>
        {/* <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JH15WHCC0Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='textoVideo'>Novelista, ensayista y místico intelectual, Aldous Leonard Huxley nació en Inglaterra en 1894 en el seno de una destacada familia de literatos y científicos. 
          Entre sus obras más importantes figuran: Las puertas de la percepción. Cielo e infierno, Un mundo feliz, La filosofía perenne, La isla, El tiempo debe detenerse, 
          Los demonios de Loudun y Contrapunto. </p> */}
   </div>
 );
 
 export default JungPage;