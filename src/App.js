import logotipo from './img/loading.png';
// import logo from './img/logo.png';
import DashboardComponent from './components/DashboardComponent';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import CoverImage from './components/CoverImgComponent';

import HuxleyPage from './components/pages/HuxleyPage'
import CrowleyPage from './components/pages/CrowleyPage';
import JungPage from './components/pages/JungPage';
import CastanedaPage from './components/pages/CastanedaPage';
import CampbellPage from './components/pages/CampbellPage';

function App() {
  return (
    <BrowserRouter>
    
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
            {/* <li className='logo'>
              <NavLink to='/'>
              <img src={logo} className="App-logo" alt="logo" />
              </NavLink>
            </li> */}
          </ul>
        
        </div>
 
          {/* <div className='GalleryContainer'>
            <GalleryComponent className="Gallery"/>
          </div> */}
          {/* <div className='DashboardComponent'>
            <DashboardComponent/>
          </div> */}
    {/* Rutas */}
    <Routes>
        {/* <Route path='/' element={<DashboardComponent/>}/> */}
        <Route path="/" element={<>
          <CoverImage/>
          <DashboardComponent />
        </>} />
        <Route path="/aldous-huxley" element={<HuxleyPage/>}/>
        <Route path='/aleister-crowley' element={<CrowleyPage/>}/>
        <Route path='/carl-jung' element={<JungPage/>}/>
        <Route path='/carlos-castaneda' element={<CastanedaPage/>}/>
        <Route path='/joseph-campbell' element={<CampbellPage/>}/>
        <Route path='/lama-tsondru' element={''}/>
        <Route path='/mircea-eliade' element={''}/>
        <Route path='/rumi' element={''}/>
        <Route path='/swami-sivananda' element={''}/>
        
    </Routes>
    </header>
    </div>

    </BrowserRouter>
  );
}

export default App;