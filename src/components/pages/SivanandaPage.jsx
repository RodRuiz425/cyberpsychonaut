import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/SwamiSivananda/DALL·E 2023-04-14 20.14.22 - astrological medieval manuscript .png'),
  },
  {
    original: require('../../img/Pages/SwamiSivananda/DALL·E 2023-05-11 13.19.22 - fractal spiral.png'),
  },

];

 const SivanandaPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Swami Sivananda</h1>
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
 
 export default SivanandaPage;