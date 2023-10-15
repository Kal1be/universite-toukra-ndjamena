
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
 import { faFacebook,faWhatsapp,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons";
 import {faClock,faLocation,faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import img1 from "../img/img5/class2.jpg"
import img2 from "../img/img5/class4.jpeg"
import img3 from "../img/img5/class3.jpg"
import img4 from "../img/img5/temoin3.webp"
import img5 from "../img/img5/temoin4.png"
import img6 from "../img/img5/temoin2.jpeg"
import img7 from "../img/img5/temoin5.png"
import img8 from '../img/img3/professeur1.jpeg'
import img9 from '../img/img3/professeur3.jpeg'
import img10 from '../img/img3/professeur6.jpg'
import img11 from '../img/img3/professeur7.jpeg'
import Slide from "./Slide"
import "./second.css"



const SecondOne=()=>{
  return(
    <>
    <div className="container-fluid bg-white" id="containelement">
      <div className="container">
        <h1 className="text-center" id="h1">Nos Evenements a venir</h1>
        <p className="text-center " id="p">Jeffrey crikey victoria sponge mush spiffing super arse over tit matie 
          boy smashing. The little rotter off his nut codswallop.!</p>
        <div className="row shadow" id="contenuimg">
          <div className="col-sm-5 col-12">
           <div className="direction"> <img src={img1} alt="" /></div>
          </div>
          <div className="col-sm-7 col-12">
            <p className="text-warning fs-4 my-3">27 Avril,2024</p>
            <h1 id="h1a">Remise de Diplome de finalisation pour nos Laureats</h1>
            <div className="modifiant my-2">
             <span> <FontAwesomeIcon icon={faClock} className="colorblue"/>12:00min</span>
            <span>  <FontAwesomeIcon icon={faLocation} className="colorblue"/>Maison de la Femme</span>
            </div>
            <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus quasi
             culpa officia esse quia dicta fugiat, natus facere laboriosam ipsam sit aliquam.</p>
          </div>
        </div>
        <div className="row shadow" id="contenuimg">
          <div className="col-sm-5 col-12">
           <div className="direction"> <img src={img2} alt="" /></div>
          </div>
          <div className="col-sm-7 col-12">
            <p className="text-warning fs-4 my-3">27 Janvier,2024</p>
            <h1 id="h1a">Championat entre l'universite de Toukra et celui de Gassi</h1>
            <div className="modifiant my-2">
            <span> <FontAwesomeIcon icon={faClock} className="colorblue"/>15:00min</span>
            <span>  <FontAwesomeIcon icon={faLocation} className="colorblue"/>12 Avenue de Gaulle</span>
            </div>
            <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus quasi
             culpa officia esse quia dicta fugiat, natus facere laboriosam ipsam sit aliquam.</p>
          </div>
        </div>
        <div className="row shadow" id="contenuimg">
          <div className="col-sm-5 col-12">
           <div className="direction"> <img src={img3} alt="" /></div>
          </div>
          <div className="col-sm-7 col-12">
            <p className="text-warning fs-4 my-3">27 Decembre,2024</p>
            <h1 id="h1a"> Des Concours organiser pour cette fin d'annee 2023-2024</h1>
            <div className="modifiant my-2">
            <span> <FontAwesomeIcon icon={faClock} className="colorblue"/>12:00min</span>
            <span>  <FontAwesomeIcon icon={faLocation} className="colorblue"/>12 Avenue Bokassa</span>
            </div>
            <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus quasi
             culpa officia esse quia dicta fugiat, natus facere laboriosam ipsam sit aliquam.</p>
          </div>
        </div>
      </div>
     <button className="btn btn-outline-primary fs-3 my-4" id="mybtn">Lire plus..</button>
     </div>
    
    </>
  )
}
export function First(){
  return(
    
    <div className="container-fluid" id="containContainer">
    <div className="row">
      <div className="col-md-5 col-12">
        <h1>Reportage de certain de nos etudiants</h1>
        
      </div>
      <div className="col-md-6 col-12">
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2000} id="elemento">
     <div>
<p>Salut,je suis Adele Orimadji et je suis etudiante a l'universite de Toukra,j'etudie la communication et mon reve c'est de devenir journaliste de Television.Rejoignez moi et etudions ensemble</p>
<div className="nour">
  <img src={img4} alt="" />
  <p>Adele Orimadji <span>Etudiante</span></p>
</div>
     </div>
    </div>

    <div className="carousel-item" data-bs-interval={2000} id="elemento">
     <div>
     <p>Salut,moi ce Etienne Dingamnodji et je suis etudiant a l'universite de Toukra,j'etudie la Philosophie et mon reve c'est de devenir grand philosophe,Rejoignez nous et etudions ensemble.</p>
<div  className="nour">
  <img src={img5} alt="" />
  <p>Dingamnodji Etienne<span>Etudiant</span></p>
</div>
     </div>
    </div>

    <div className="carousel-item" data-bs-interval={2000} id="elemento">
     <div>
     <p>Salut,moi ce Koubeube Angele et je suis etudiante a l'universite de Toukra,j'etudie la science sociale et mon reve est de permettre la cohabitation entre les tchadiens,Rejoignez nous et etudions ensemble.</p>
<div  className="nour">
  <img src={img6} alt="" />
  <p>Koubeube Angele<span>Etudiante</span></p>
</div>
     </div>
    </div>





    <div className="carousel-item" id="elemento">
    <div>
     <p>Salut je suis Biampambe Marcelin,je suis etudiant a l'universite de Toukra,j'etudie l'Anthropologie et mon reve ce d'etre Anthropologue et Historien,rejoingnez nous et etudions ensemble.</p>
<div  className="nour">
  <img src={img7} alt="" />
  <p>Bianpambe Marcelin<span>Etudiant</span></p>
</div>
     </div>
    </div>
  </div>
  <div className="btnall">
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" id="bton1">
  <span classname="text-light">< FontAwesomeIcon icon={faArrowLeft}/></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" id="bton2">
  <span classname="text-light"> < FontAwesomeIcon icon={faArrowRight}/> </span>
  </button>
  </div>
  
</div>


      </div>
    </div>
    </div>
  )
}


function Second() {
  
  return (
    <div>
      <div className="container-fluid">
        <div className="contain">
            <h1 className="text-center">Explorer nos populaire cours</h1>
            <p className="text-center">Voici en quelques sortes les listes de nos cours vous pouvez <br />en visiter 
             en cliquant sur le d'indications pour en visiter et voir plus</p>
        </div>
      </div>

<div className="" id="conten">
  <Slide/>

</div>
<div className="container-fluid bg-white">
        <div className="contain">
            <h1 className="text-center">Top des Enseignants</h1>
            <p className="text-center">Voici en quelques nos Professeurs et leurs listes au complet </p>
        </div>
        <div className="row row-cols-lg-4 row-cols-1" id="depend">
          <div className="col-lg-3 col-sm-6 py-md-2  col-12">
           <div className="card shadow" id="card">
            <img src={img8} alt=""  className="card-img-top"/>
          <div className="overlay">
          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faWhatsapp}  className="icon"/>
          <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
          <FontAwesomeIcon icon={faInstagram}  className="icon"/>
          </div>
            <div className="card-body">
              <h3 className="card-title">Professeur en Mathematique</h3>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ipsa!</p>
            </div>
           </div>
          </div>
          <div className="col-lg-3 col-sm-6 py-md-2 col-12">
          <div className="card shadow" id="card">
          <img src={img9} alt="" className="card-img-top" />
          <div className="overlay">
          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faWhatsapp}  className="icon"/>
          <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
          <FontAwesomeIcon icon={faInstagram}  className="icon"/>
          </div>
          <div className="card-body">
              <h3 className="card-title">Professeur en Mathematique</h3>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ipsa!</p>
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-sm-6 py-md-2 col-12">
          <div className="card shadow" id="card">
          <img src={img10} alt="" className="card-img-top" />
          <div className="overlay">
          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faWhatsapp}  className="icon"/>
          <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
          <FontAwesomeIcon icon={faInstagram}  className="icon"/>
          </div>
          <div className="card-body">
              <h3 className="card-title">Professeur en Mathematiques </h3>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ipsa!</p>
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-sm-6 py-md-2 col-12">
          <div className="card shadow" id="card">
          <img src={img11} alt="" className="card-img-top" />
          <div className="overlay">
          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faWhatsapp}  className="icon"/>
          <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
          <FontAwesomeIcon icon={faInstagram}  className="icon"/>
          </div>
          <div className="card-body">
              <h3 className="card-title">Professeur en Mathematique</h3>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ipsa!</p>
            </div>
          </div>
        </div>
        </div>
      </div>

<SecondOne/>
<First/>
</div>


  )
}

export default Second

