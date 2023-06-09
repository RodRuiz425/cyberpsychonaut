import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: require('../../img/Pages/JosephCampbell/DALL·E 2022-08-10 16.07.44 - fractal DMT realm.png'),
  },
  {
    original: require('../../img/Pages/JosephCampbell/DALL·E 2023-04-14 20.14.25 - astrological medieval manuscript .png'),
  },
  {
    original: require('../../img/Pages/JosephCampbell/DALL·E 2023-05-09 13.01.23 - fractal medieval castle.png'),
  },
  {
    original: require('../../img/Pages/JosephCampbell/DALL·E 2023-05-09 13.02.05 - fractal palace DMT moebius.png'),
  },

];

 const CampbellPage = () => (
  <div className='pageContainer'>
    <div className='pageSec'>
        <h1>Joseph Campbell</h1>
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
    <div className='pageSec'>
        <h2>Videos Recomendados</h2>
        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pE8ciMkayVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h4>Joseph Campbell and the Power of Myth | Ep. 1: "The Hero's Adventure"</h4>
        <p className='textoVideo'> 
          Joseph Campbell alienta a la audiencia a descubrir que es lo que los motiva, y a hacer que eso sea la base de sus viajes personales.
        </p>
        <br/>

        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Aee5DJ9DSwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h4>Joseph Campbell and the Power of Myth | Ep. 2: "The Message of the Myth"</h4>
        <p className='textoVideo'> 
          Joseph Campbell aborda los mitos de la creación de la Biblia y otros textos.
        </p>
        <br/>

        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ij5cJtYLkvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h4>Joseph Campbell and the Power of Myth | Ep. 3: "The First Storytellers"</h4>
        <p className='textoVideo'> 
          Joseph Campbell explica cómo los mitos antiguos hacen que los humanos entiendan y acepten el nacimiento, el crecimiento y la muerte.
        </p>
        <br/>

        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hEqR73j_oMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h4>Joseph Campbell and the Power of Myth | Ep. 4: "Sacrifice and Bliss"</h4>
        <p className='textoVideo'> 
          Bill Moyers y Joseph Campbell discuten dónde se puede presenciar el heroísmo en la sociedad moderna.
        </p>
        <br/>

        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/v_2DhV4BdOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h4>Joseph Campbell and the Power of Myth | Ep. 5: "Love and the Goddess"</h4>
        <p className='textoVideo'> 
          Bill Moyers y Joseph Campbell discuten dónde se puede presenciar el heroísmo en la sociedad moderna.
        </p>
        <br/>

        <hr/>
        <div className='yVideo'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5g9RVCPePDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h4>Joseph Campbell and the Power of Myth | Ep. 6: "Masks of Eternity"</h4>
        <p className='textoVideo'> 
          Bill Moyers y Joseph Campbell analizan la experiencia común de Dios en todas las culturas.
        </p>
        <br/>
    </div>
  </div>

 );
 
 export default CampbellPage;