import './App.css';
import Navbar from './header/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Footer from './footer/Footer';

function App() {
  return (
    <div> 
      <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' Component={Accueil}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
