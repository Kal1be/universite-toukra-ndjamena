import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom"
import Header from './Header';
import img1 from "../img/img1/drapeau1.png"
import img2 from "../img/img1/im6.png";
function Navbar() {
  return (
    <div>
        <Header/>
     <nav className="navbar navbar-expand-lg px-lg-2 px-0 shadow border bg-white" id='navbar'>
  <div className="container-fluid">
  <h2 className='navbar-brand fs-lg-1 fs-4'><img src={img2} alt="" /> <strong>Universite de <strong className='text-primary'>Toukra</strong> </strong><span className="divider"><img src={img1} alt="the problem is there" /></span></h2>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
      </li>
      <li class="nav-item">
          <Link class="nav-link" to="#">
            Recherches
          </Link>
          <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to="#">Admission et Nouvelles</Link></li>
              <li><Link to="#"> Politique de confidentialite</Link></li>
              <li><Link to="#">Librairies de l'universitè</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">La formation a l'universite</Link></li>
              <li><Link to="#">Les services disponibles</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
        </li>
      <li className="nav-item ">
        <Link className="nav-link" to="#" >
          Facultes
        </Link>
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to="#">Departement de Francais</Link></li>
                <li><Link to="#">Departement de Philosophie</Link></li>
                <li><Link to="#">Departement de l'Anthopologie</Link></li>
                <li><Link to="#">Departement de Communication</Link></li>
                <li><Link to="#">Departement de Geographie</Link></li>
                <li><Link to="#">Departement d'Histoire</Link></li>
                <li><Link to="#">Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>

      </li>
      <li className="nav-item">
          <Link className="nav-link active" to="#">Instituts&amp;Centres  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
         
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to="#">Departement de Francais</Link></li>
                <li><Link to="#">Departement de Philosophie</Link></li>
                <li><Link to="#">Departement de l'Anthopologie</Link></li>
                <li><Link to="#">Departement de Communication</Link></li>
                <li><Link to="#">Departement de Geographie</Link></li>
                <li><Link to="#">Departement d'Histoire</Link></li>
                <li><Link to="#">Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>

        </li> 
     
        <li className="nav-item">
          <Link className="nav-link active" to="#">Nouvelles  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
          <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to="#">Admission et Nouvelles</Link></li>
              <li><Link to="#"> Politique de confidentialite</Link></li>
              <li><Link to="#">Librairies de l'universitè</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">La formation a l'universite</Link></li>
              <li><Link to="#">Les services disponibles</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Biblioteques  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue a Toukra !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="#">A Propos </Link><span>+</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="#">
            Facultes </Link><span>+</span>
         
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Instituts&amp;Centres  </Link><span>+</span>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to="#">Nouvelles  </Link><span>+</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Biblioteques </Link><span>+</span>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le small screen */}

</nav>



{/* ****************fixes la position si le scroll est a 150px******************* */}



<nav className="navbar navbar-expand-lg px-lg-2 px-sm-0 shadow border " id="nav">
  <div className="container-fluid">
  <h2 className='navbar-brand fs-lg-1 fs-4'><img src={img2} alt="" /> <strong>Universite de <strong className='text-primary'>Toukra</strong> </strong><span className="divider"><img src={img1} alt="the problem is there" /></span></h2>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Recherche</Link>
        <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to="#">Admission et Nouvelles</Link></li>
              <li><Link to="#"> Politique de confidentialite</Link></li>
              <li><Link to="#">Librairies de l'universitè</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">La formation a l'universite</Link></li>
              <li><Link to="#">Les services disponibles</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="#" >
          Facultes
        </Link>
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to="#">Departement de Francais</Link></li>
                <li><Link to="#">Departement de Philosophie</Link></li>
                <li><Link to="#">Departement de l'Anthopologie</Link></li>
                <li><Link to="#">Departement de Communication</Link></li>
                <li><Link to="#">Departement de Geographie</Link></li>
                <li><Link to="#">Departement d'Histoire</Link></li>
                <li><Link to="#">Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>
      </li>
      <li className="nav-item">
          <Link className="nav-link active" to="#">Instituts&amp;Centres </Link>
          <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to="#">Departement de Francais</Link></li>
                <li><Link to="#">Departement de Philosophie</Link></li>
                <li><Link to="#">Departement de l'Anthopologie</Link></li>
                <li><Link to="#">Departement de Communication</Link></li>
                <li><Link to="#">Departement de Geographie</Link></li>
                <li><Link to="#">Departement d'Histoire</Link></li>
                <li><Link to="#">Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to="#">Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to="#">Facultès des Sciences et de l'Education</Link></li>
      <li><Link to="#">Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to="#">Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to="#">Nouvelles  </Link>
           <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to="#">Admission et Nouvelles</Link></li>
              <li><Link to="#"> Politique de confidentialite</Link></li>
              <li><Link to="#">Librairies de l'universitè</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">La formation a l'universite</Link></li>
              <li><Link to="#">Les services disponibles</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
              <li><Link to="#">Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Accueil</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="#">A Propos  </Link><span>+</span>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link active " >
            Facultes 
      <span>+</span>     </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Instituts&amp;Centres  </Link><span>+</span>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to="#">Nouvelles  </Link><span>+</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Biblioteques  </Link><span>+</span>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le small screen */}

</nav>

    </div>
  )
}

export default Navbar
