import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import AvisoComponent from '../AvisoComponent';

const images = [
  {
    original: require('../../img/Pages/LeviStrauss/DALL·E 2023-06-19 11.36.16 - fractal spiral style by moebius.png'),
  },
  {
    original: require('../../img/Pages/LeviStrauss/2747535263_DMT_psychonaut__768-v2-1-transformed.png'),
  },


];

 const StraussPage = () => (
    <div className='pageContainer'>
      <AvisoComponent/>
      <div className='pageSec'>
        <h1>Claude Lévi-Strauss</h1>
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
 
 export default StraussPage;