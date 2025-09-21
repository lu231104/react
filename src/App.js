import './App.css';
import logo from './imagenes/logo.jpg'

function App() {
  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img
            src={logo}
            className='freecodecamp-logo'
            alt='Logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-calculadora'>

        </div>
    </div>
  );
}

export default App;
