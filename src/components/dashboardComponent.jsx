import React from 'react';
import AleisterCrowleyPNG from '../img/Dashboard/crowleyD.png';
import HuxleyPNG from '../img/Dashboard/huxleyD.png';
import JungPNG from '../img/Dashboard/jung.png';
import CastanedaPNG from '../img/Dashboard/castaneda.png';
import CampbellPNG from '../img/Dashboard/campbell.png';
import TsondruPNG from '../img/Dashboard/tsondru.png';
import LaoTsePNG from '../img/Dashboard/laotse.png';
import EliadePNG from '../img/Dashboard/eliade.png';
import RumiPNG from '../img/Dashboard/rumi.png';
import SivanandaPNG from '../img/Dashboard/sivananda.png';

import HuxleyD from '../img/Dashboard/huxleyD.png';
import CrowleyD from '../img/Dashboard/crowleyD.png';

const DashboardComponent = () => (
   <div>
      <div className='dashGridContainer'>
        <div className='dashGrid-item'>
            <img src={HuxleyPNG} alt="Aldous Huxley" />
            <hr/>
            <h2>Aldous Huxley</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={AleisterCrowleyPNG} alt="Aleister Crowley" />
            <hr/>
            <h2>Aleister Crowley</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={JungPNG} alt="Carl Jung" />
            <hr/>
            <h2>Carl Gustav Jung</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={CastanedaPNG} alt="Carlos Castaneda" />
            <hr/>
            <h2>Carlos Castaneda</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={CampbellPNG} alt="Joseph Campbell" />
            <hr/>
            <h2>Joseph Campbell</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={TsondruPNG} alt="Lama Tsondru" />
            <hr/>
            <h2>Lama Tsondru</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={LaoTsePNG} alt="Lao Tse" />
            <hr/>
            <h2>Lao Tse</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={EliadePNG} alt="Eliade" />
            <hr/>
            <h2>Mircea Eliade</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={RumiPNG} alt="Rumi" />
            <hr/>
            <h2>Rumi</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={SivanandaPNG} alt="Swami Sivananda" />
            <hr/>
            <h2>Swami Sivananda</h2>
        </div>
      </div>
   </div>
 );
 
 export default DashboardComponent;