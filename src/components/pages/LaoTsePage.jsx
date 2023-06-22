import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/LaoTse/DALL·E 2022-08-10 16.12.48 - fractal realm.png'),
  },
  {
    original: require('../../img/Pages/LaoTse/DALL·E 2022-09-15 13.10.05 - fractal sacred geometry temple.png'),
  },
  {
    original: require('../../img/Pages/LaoTse/DALL·E 2023-02-24 23.13.14 - fractal kabbalah.png'),
  },
  {
    original: require('../../img/Pages/LaoTse/DALL·E 2023-03-19 20.32.04 - goetia manuscript hindu mandala.png'),
  },
  {
    original: require('../../img/Pages/LaoTse/DALL·E 2023-05-11 10.31.08 - fractal DMT realm sacred geometry .png'),
  },
  {
    original: require('../../img/Pages/LaoTse/laotse1.png'),
  },
];

 const LaoTsePage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Lao Tse</h1>
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
 
 export default LaoTsePage;