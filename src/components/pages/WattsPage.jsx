import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/AlanWatts/DALL·E 2023-06-19 11.35.23 - fractal spiral style by moebius.png'),
  },
  {
    original: require('../../img/Pages/AlanWatts/alanwatts1.png'),
  },

];

 const WattsPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Alan Watts</h1>
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
 
 export default WattsPage;