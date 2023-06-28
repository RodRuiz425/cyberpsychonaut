import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/HermesTrismegisto/DALL·E 2023-05-23 21.44.42.png'),
  },
  {
    original: require('../../img/Pages/HermesTrismegisto/hermestrismegisto1.png'),
  },

];

 const HermesPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Hermes Trismegisto</h1>
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
 
 export default HermesPage;