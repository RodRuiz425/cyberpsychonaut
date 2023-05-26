import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
   {
     original: require('../img/Galeria/aleistercrowley1.png'),
     thumbnail: require('../img/Galeria/aleistercrowley1.png'),
   },
 ];

 const GalleryComponent = () => (
   <div className='GalleryComponent'>
      <ImageGallery 
         items={images} 
         showPlayButton={false}
         disableThumbnailScroll={false}
      />
   </div>
 );
 
 export default GalleryComponent;