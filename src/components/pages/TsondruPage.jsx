import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/LamaTsondru/DALL·E 2022-08-10 13.24.11 - Psychodelic Dream.png'),
  },
  {
    original: require('../../img/Pages/LamaTsondru/lamatsondru1.png'),
  },

];

 const TsondruPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Lama Tsondru</h1>
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
 
 export default TsondruPage;