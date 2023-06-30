import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import AvisoComponent from '../AvisoComponent';


const images = [
  {
    original: require('../../img/Pages/StanislavGrof/DALL·E 2023-06-19 16.32.17 - analog geometry .png'),
  },
  {
    original: require('../../img/Pages/StanislavGrof/stanislavgrof1.png'),
  },

];

 const SGrofPage = () => (
    <div className='pageContainer'>
    <AvisoComponent/>
      <div className='pageSec'>
        <h1>Stanislav Grof</h1>
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
 
 export default SGrofPage;