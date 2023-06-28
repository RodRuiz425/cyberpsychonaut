import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/TerenceMckenna/DALL·E 2022-09-15 09.43.53 - interdimensional being with DMT fractals.png'),
  },
  {
    original: require('../../img/Pages/TerenceMckenna/DALL·E 2023-05-18 18.04.00 - fractal spiral DMT.png'),
  },
  {
    original: require('../../img/Pages/TerenceMckenna/DALL·E 2023-06-09 23.34.11 - fractal vortex made of ancient greek and sanskrit words.png'),
  },

];

 const MckennaPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Terence Mckenna</h1>
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
   </div>
 );
 
 export default MckennaPage;