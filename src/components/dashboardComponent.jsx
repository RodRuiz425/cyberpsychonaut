import React from 'react';
import { NavLink } from 'react-router-dom';
import CoverImage from './CoverImgComponent';

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

const DashboardComponent = () => (
   <div className='DashboardComponent'>
    <h2>Autores</h2>
      <div className='dashGridContainer'>
        <div className='dashGrid-item'>
            <NavLink to='/aldous-huxley' className='navlink'>
                <img src={HuxleyPNG} alt="Aldous Huxley" />
                <h2>Aldous Huxley</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/aleister-crowley' className='navlink'>
                <img src={AleisterCrowleyPNG} alt="Aleister Crowley" />
                <h2>Aleister Crowley</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/carl-jung' className='navlink'>
            <img src={JungPNG} alt="Carl Jung" />
            <h2>Carl Gustav Jung</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/carlos-castaneda' className='navlink'>
            <img src={CastanedaPNG} alt="Carlos Castaneda" />
            <h2>Carlos Castaneda</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/joseph-campbell' className='navlink'>
            <img src={CampbellPNG} alt="Joseph Campbell" />
            <h2>Joseph Campbell</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <img src={TsondruPNG} alt="Lama Tsondru" />
            <h2>Lama Tsondru</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={LaoTsePNG} alt="Lao Tse" />
            <h2>Lao Tse</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={EliadePNG} alt="Mircea Eliade" />
            <h2>Mircea Eliade</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={RumiPNG} alt="Rumi" />
            <h2>Rumi</h2>
        </div>
        <div className='dashGrid-item'>
            <img src={SivanandaPNG} alt="Swami Sivananda" />
            <h2>Swami Sivananda</h2>
        </div>
      </div>
   </div>
 );
 
 export default DashboardComponent;