import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/PeterCarroll/0_star wars mithology alex grey_esrgan-v1-x2plus (2).png'),
  },
  {
    original: require('../../img/Pages/PeterCarroll/DALL·E 2022-08-10 16.24.23.png'),
  },
  {
    original: require('../../img/Pages/PeterCarroll/DALL·E 2023-02-24 23.23.06 - medieval manuscript illustration yantra.png'),
  },
  {
    original: require('../../img/Pages/PeterCarroll/DALL·E 2023-06-09 12.05.20 - sacred geometry fractal .png'),
  },
];

 const CarrollPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Peter J. Carroll</h1>
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
 
 export default CarrollPage;