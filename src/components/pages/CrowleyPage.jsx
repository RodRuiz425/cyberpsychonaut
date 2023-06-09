import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  // {
  //   original: require('../../img/Pages/AldousHuxley/aldoushuxley1.png'),
  //   thumbnail: require('../../img/Pages/AldousHuxley/aldoushuxley1.png'),
  // },
  {
    original: require('../../img/Pages/AleisterCrowley/DALL·E 2023-04-10 01.26.34 - hindu yantra from medieval european manuscript.png'),
  },
  {
    original: require('../../img/Pages/AleisterCrowley/DALL·E 2023-04-10 01.27.05 - hindu yantra from medieval catholic manuscript.png'),
  },
  {
    original: require('../../img/Pages/AleisterCrowley/DALL·E 2023-05-11 20.02.29 - medieval manuscript magic hindu yantra pentagram.png'),
  },
  {
    original: require('../../img/Pages/AleisterCrowley/DALL·E 2023-05-23 21.44.26 - medieval manuscript pentagram hindu yantra catholic.png'),
  },
  {
    original: require('../../img/Pages/AleisterCrowley/aleistercrowley1.png'),
  },
];

 const CrowleyPage = () => (
    <div className='pageContainer'>
      <div className='pageSec'>
        <h1>Aleister Crowley</h1>
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
 
 export default CrowleyPage;