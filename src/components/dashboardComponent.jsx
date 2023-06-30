import React from 'react';
import { NavLink } from 'react-router-dom';

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
import KDickPNG from '../img/Dashboard/philipkdick.png';
import MckennaPNG from '../img/Dashboard/mckenna.png';
import WattsPNG from '../img/Dashboard/alanwatts.png';
import MorrisonPNG from '../img/Dashboard/grantmorrison.png';
import HermesPNG from '../img/Dashboard/hermes.png';
import CarrollPNG from '../img/Dashboard/peterjcarroll.png';
import StraussPNG from '../img/Dashboard/levistrauss.png';
import SGrofPNG from '../img/Dashboard/stanislavgrof.png';


const DashboardComponent = () => (
   <div className='DashboardComponent'>
    <h2>Autores</h2>
    <hr/>
      <div className='dashGridContainer'>
        <div className='dashGrid-item'>
            <NavLink to='/alan-watts' className='navlink'>
            <img src={WattsPNG} alt="Alan Watts"/>
            <h2>Alan Watts</h2>
            </NavLink>
        </div>
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
            <NavLink to='/levi-strauss' className='navlink'>
            <img src={StraussPNG} alt="Carlos Castaneda" />
            <h2>Claude Lévi-Strauss</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/grant-morrison' className='navlink'>
            <img src={MorrisonPNG} alt="Grant Morrison"/>
            <h2>Grant Morrison</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/hermes-trismegisto' className='navlink'>
            <img src={HermesPNG} alt="Hermes Trismegisto"/>
            <h2>Hermes Trismegisto</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/joseph-campbell' className='navlink'>
            <img src={CampbellPNG} alt="Joseph Campbell" />
            <h2>Joseph Campbell</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/lama-tsondru' className='navlink'>
            <img src={TsondruPNG} alt="Lama Tsondru" />
            <h2>Lama Tsondru</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/lao-tse' className='navlink'>
            <img src={LaoTsePNG} alt="Lao Tse" />
            <h2>Lao Tse</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/mircea-eliade' className='navlink'>
            <img src={EliadePNG} alt="Mircea Eliade" />
            <h2>Mircea Eliade</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/peter-carroll' className='navlink'>
            <img src={CarrollPNG} alt="Peter J. Carroll"/>
            <h2>Peter J. Carroll</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/philip-k-dick' className='navlink'>
            <img src={KDickPNG} alt="Philip K. Dick"/>
            <h2>Philip K. Dick</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='rumi' className='navlink'>
            <img src={RumiPNG} alt="Rumi" />
            <h2>Rumi</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/swami-sivananda' className='navlink'>
            <img src={SivanandaPNG} alt="Swami Sivananda" />
            <h2>Swami Sivananda</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/stanislav-grof' className='navlink'>
            <img src={SGrofPNG} alt="Stanislav Grof" />
            <h2>Stanislav Grof</h2>
            </NavLink>
        </div>
        <div className='dashGrid-item'>
            <NavLink to='/terence-mckenna' className='navlink'>
            <img src={MckennaPNG} alt="Terence Mckenna"/>
            <h2>Terence Mckenna</h2>
            </NavLink>
        </div>

      </div>
   </div>
 );
 
 export default DashboardComponent;