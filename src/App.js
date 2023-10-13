import './App.css';
import Navbar from './header/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Footer from './footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
       <Switch>
        <Route path='/' Component={<Accueil/>}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
