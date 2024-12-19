import { Link } from "react-router-dom";

function Navbarindex(){
    return(
     <div className="container-fluid" style={{position:'',top:-10}}>

        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./images/amitylogo.svg" className="img-fluide"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
    
      
      <Link className="nav-link" to ="/test">PROGRAM</Link>
          {/* <a className="nav-link " href="#">PROGRAMS</a> */}
        </li>
       
        <li className="nav-item">
            <Link className="nav-link" to="/Career">CAREER SERVICES</Link>
          {/* <a className="nav-link" href="#">CAREER SERVICES</a> */}
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/adv">ADVANTAGES</Link>
          {/* <a className="nav-link" href="#">ADVANTAGES</a> */}
        </li>
       
        <button type="button" className="btn btn-warning ms-2 mt-2"  data-bs-toggle="modal"  data-bs-target="#callModal">CALL US</button>
    
        <button type="button" className="btn btn-success ms-2 mt-2"  data-bs-toggle="modal" data-bs-target="#myModal" >
         STUDENT LOGIN
          </button>
      <button type="button" className="btn btn-warning ms-2 mt-2"><Link className="nav-link" to="/enrollnow2"></Link> ENROLL NOW</button>
        {/* <li className="nav-item">
        <Link className="nav-link" to="./enroll">ENROLLNOW</Link>
        </li>
       
        */}
      </ul>
    </div>
  </div>
</nav>
{/* 2nd div start */}
{/* 2nd div close */}
{/* third div */}

{/* third div close */}




<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        {/* <h1>nisha</h1> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
        <div className="row">
          <div className="col md-6">
            <img src="./images/amityboy.png"height="520" width="420"/>
          </div>
          <div className="col md-6">
            <div className='m-5'>
            <h1><i><u>Student Login</u></i></h1>
            <p><i><u>Enter your details here to login to your account</u></i></p>
            <div class="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="login email" name="email" />
      </div>
      <div className="col">
        <input type="password" className="form-control" placeholder="login password" name="pswd" />
      </div>
    </div>
    <p><i>email-id/form id*</i></p>
    <div className="row">
        <input type="text" className="form-control inputbox" placeholder="Enter email" name="email" />
      </div>
      <p><i><u>password*</u></i></p>
    <div className="row">
        <input type="text" className="form-control inputbox" placeholder="Enter password" name="email" />
      </div>
      <p><i><u>Forgot password</u></i></p>
      <div className="row">
        <input type="text" className="form-control inputbox" placeholder="submit" name="email" />
      </div>
      </div>


          </div>
        </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


<div class="modal" id="callModal">
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        {/* <h4 class="modal-title">Modal Heading</h4> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      {/* <div class="modal-body">
        Modal body..
      </div> */}
    
    
        <div>
    
    
            <img src="./images/callgirl1.jpeg"/>
        </div>
      


      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</div>
 )
}
export default Navbarindex;
