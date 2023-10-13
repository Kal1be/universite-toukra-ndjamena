import './App.css';
import Navbar from './header/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Footer from './footer/Footer';

function App() {
  return (
    <div> 
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' Component={Accueil}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
