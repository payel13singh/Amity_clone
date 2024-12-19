function Navbar(){
    return(
        <div className="container">
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./images/amitylogo.png" className="img-fluid"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        {/* <Link className="nav-link" to ="/test">PROGRAM</Link> */}
          <a class="nav-link" href="#">PROGRAM</a>
        </li>
        <li class="nav-item">
        {/* <Link className="nav-link" to="/Career">CAREER SERVICES</Link> */}
          <a class="nav-link" href="#">CAREER SERVICE</a>
        </li>
        <li className="nav-item">
            {/* <Link className="nav-link" to="/adv">ADVANTAGES</Link> */}
          <a className="nav-link" href="#">ADVANTAGES</a>
        </li>

        {/* <li class="nav-item">
          <a class="nav-link" href="#">ADVANTAGES</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link" href="#">STUDENT LOGIN</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link" href="#">ENROLL NOW</a>
        </li>  */}
        <button type="button" className="btn btn-warning ms-2 mt-2">CALL US</button>
    
    <button type="button" className="btn btn-success ms-2 mt-2"  data-bs-toggle="modal" data-bs-target="#myModal" >
     STUDENT LOGIN
      </button>
    <button type="button" className="btn btn-warning ms-2 mt-2">ENROLL NOW</button>
       
      
      
      
      </ul>
    </div>
  </div>
  </nav>
        </div>
    )
}
export default Navbar;