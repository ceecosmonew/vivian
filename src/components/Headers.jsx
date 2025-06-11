import React from 'react';
import LOGO from '../assets/images/Achalogo10.png'


function Headers() {

  function Headers1(){
  var x = document.getElementById("Searchtextbox").value;
  if (x == "") {
      alert("Search Bar is empty, Please enter data to search for..!");

  }  
 // else if (x != "Searchtextbox") {
  // return window.location = "Parish.aspx";
 // }
 
 
  
  else {
      return window.location = "/Service?Search=" + document.getElementById("Searchtextbox").value;
  }
}
  // const Search = () =>{
    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearch = () => {
    //   alert("Please enter the name of Priest in the Search bar to continue..! searching for: " +searchTerm);

    // }
  //   var x = document.getElementById("Searchtextbox").value;
  // if (x == "") {
  //   alert("Please enter the name of Priest in the Search bar to continue..!");

  // } 

  //}
  
 // else if (x != "Searchtextbox") {
  // return window.location = "Parish.aspx";
 // }
 
 
  



  return (
    <>

{/* bg-body-tertiary */}
{/* style={{ height: '70px'}}  */}
<nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary" style={{background:'', height:'88px'}}  >
  <div className="container" >
    <a className="navbar-brand" href="/" ><img src={LOGO} /></a>
                          {/* bg-light */}
    <button className="navbar-toggler " style={{background:'#49A62C'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation ">
    
      <span className="navbar-toggler-icon" ></span>
   

    </button>






    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto" > 

        <li className="nav-item ">
          
          <a className="nav-link active" style={{color:'#49A62C'}} aria-current="page" href="/"><i className="fa-solid fa-house"></i>HOME</a>
        </li>


        <li className="nav-item ">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i>SERVICES</a>

          <ul className="dropdown-menu">
          
    <li><a className="dropdown-item" href="/History">The History Of Achalla</a></li>
   
    <li><a className="dropdown-item" href="/ReligiousMattersPage">Achalla Religious Matters</a></li>
    <li><a className="dropdown-item" href="/BirthdayPage">Birthday Celebration of the Indigenes</a></li>
    <li><a className="dropdown-item" href="/">Town Conferences/Meeting</a></li>


    
  </ul>

  </div>
        </li>
       
        <li className="nav-item">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-calender-alt"></i>EVENTS</a>
          <ul className="dropdown-menu">
   
    <li><a className="dropdown-item" href="/OurCulturePage">Videos of Achalla Cultural Practices</a></li>
    
    <li><a className="dropdown-item" href="/BirthdayPage">Birthday Celebration of the Indigenes</a></li>
    
  </ul>
          </div>
        </li>

        <li className="nav-item">
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-file-media"></i>NEWS & MEDIA</a>

          <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/AchallaNews">Achalla News</a></li>
    
    <li><a className="dropdown-item" href="/LGaNews">LGA News</a></li>
    <li><a className="dropdown-item" href="/ForeinNews">Foreign News</a></li>
    <li><a className="dropdown-item" href="/AllAchallaPic">Achalla Graduates And Photogragh</a></li>
    
  </ul>
          </div>
        </li>

         
        <li className="nav-item">
      
      <a className="nav-link " href="/Contact"><i className="fa-solid fa-phone"></i>CONTACT</a>

    </li>

        <li className="nav-item">
      
          <a className="nav-link" href="/SupportUs">SUPPORT</a>

        
        </li>




      </ul>
      <div className="sach">
     <div className="search-container">
      <input className="mt-0" type="text1" placeholder="Search for News" id="Searchtextbox" aria-label="Search"/>
      
       <button  className="btn" type="button" style={{backgroundColor:'#49A62C', color:'white'}}  value="Search"  onClick={Headers1}><i className="fa fa-search"></i></button>
       </div>

        

    </div>
    </div>
    
  </div>
  
</nav>
 
    </>
  )
}

export default Headers