import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/PhilipDick/0_a portal to another dimension made of language lik_esrgan-v1-x2plus (1).png'),
  },
  {
    original: require('../../img/Pages/PhilipDick/DALL·E 2023-06-09 23.33.49 - fractal vortex made of ancient greek and sanskrit words.png'),
  },

];

 const KDickPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Philip K. Dick</h1>
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
 
 export default KDickPage;