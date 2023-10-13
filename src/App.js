import './App.css';
import Navbar from './header/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Footer from './footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Accueil/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
