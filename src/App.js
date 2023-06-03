import logotipo from './img/loading.png';
import logo from './img/logo.png';
// import GalleryComponent from './components/GalleryComponent';
import DashboardComponent from './components/DashboardComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Navigation'>
          <ul>
            <li className='logotipo'>
              <img src={logotipo} className="App-logotipo" alt="logotipo" />
            </li>
            <li className='logo'>
              <img src={logo} className="App-logo" alt="logo" />
            </li>
          </ul>
        </div>
          {/* <div className='GalleryContainer'>
            <GalleryComponent className="Gallery"/>
          </div> */}
          <div className='DashboardComponent'>
            <DashboardComponent/>
          </div>
      </header>
    </div>
  );
}

export default App;