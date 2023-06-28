import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/Rumi/2254596124_yantra_from_medieval_christian_manuscript___512-v2-1-transformed.png'),
  },
  {
    original: require('../../img/Pages/Rumi/DALL·E 2023-05-18 18.03.57 - fractal spiral DMT.png'),
  },

];

 const RumiPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Yalāl ad-Dīn Muhammad Rūmī</h1>
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
 
 export default RumiPage;