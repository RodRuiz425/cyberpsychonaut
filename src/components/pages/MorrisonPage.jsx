import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/GrantMorrison/DALL·E 2022-10-09 12.50.11 - fractal temple in hyperspace.png'),
  },
  {
    original: require('../../img/Pages/GrantMorrison/DALL·E 2023-06-17 10.40.12 - medieval manuscript catholic hindu yantra with sigils in the corners.png'),
  },

];

 const MorrisonPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Grant Morrison</h1>
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
 
 export default MorrisonPage;