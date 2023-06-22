import logotipo from './img/loading.png';
// import logo from './img/logo.png';
import DashboardComponent from './components/DashboardComponent';
import { HashRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import CoverImage from './components/CoverImgComponent';

import HuxleyPage from './components/pages/HuxleyPage'
import CrowleyPage from './components/pages/CrowleyPage';
import JungPage from './components/pages/JungPage';
import CastanedaPage from './components/pages/CastanedaPage';
import CampbellPage from './components/pages/CampbellPage';
import TsondruPage from './components/pages/TsondruPage';
import LaoTsePage from './components/pages/LaoTsePage';
import EliadePage from './components/pages/EliadePage';

function App() {
  return (
    <HashRouter>
    
    {/* Navegación */}
    <div className="App">
      <header className="App-header">
        <div className='Navigation'>
          <ul>
            <li className='logotipo'>
              <NavLink to='/'>
              <img src={logotipo} className="App-logotipo" alt="logotipo" />
              </NavLink>
            </li>
          </ul>
        </div>
    {/* Rutas */}
    <Routes>
        <Route exact path="/" element={<>
          <CoverImage/>
          <DashboardComponent />
        </>} />
        <Route path="/aldous-huxley" element={<HuxleyPage/>}/>
        <Route path='/aleister-crowley' element={<CrowleyPage/>}/>
        <Route path='/carl-jung' element={<JungPage/>}/>
        <Route path='/carlos-castaneda' element={<CastanedaPage/>}/>
        <Route path='/joseph-campbell' element={<CampbellPage/>}/>
        <Route path='/lama-tsondru' element={<TsondruPage/>}/>
        <Route path='/lao-tse' element={<LaoTsePage/>}/>
        <Route path='/mircea-eliade' element={<EliadePage/>}/>
        <Route path='/rumi' element={''}/>
        <Route path='/swami-sivananda' element={''}/>
    </Routes>
    </header>
    </div>
    </HashRouter>
  );
}

export default App;