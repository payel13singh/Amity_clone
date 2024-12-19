

// import './Enrollnow2.css';
// import Navbarindex from "./Navbarindex";

// function Enrollnow2(){
//     return(
//         <div className='container-fluid' >
//            {/* <Navbarindex/> */}
           
//         <nav className="navbar navbar-expand-md bg-dark navbar-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#"><img src="./images/amitylogo.svg" className="img-fluide"/></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="collapsibleNavbar">
//       <ul className="navbar-nav ms-auto">

    
//         <button type="button" className="btn btn-success ms-2 mt-2 sl" >STUDENT LOGIN</button>
//         <button type="button" className="btn btn-warning ms-2 mt-2 sl">TOLL-FREE-18001023434</button>
//       </ul>
//     </div>
//   </div>
// </nav>
//            {/* close */}
//            <div className='row'>
//             <div className='col md-2'></div>
//            <div className="enrollnow col md-8 ">
//             <h2 className='mt-5 mx-5'>create Your Account</h2>
//             <p className='mt-3 mx-5'>Please Enter Details Below</p>
//             <div className='d-flex'>
//                 <div className='row'>
//           <div className='col-12 col-md-6 '>
//             <div className="form-check ">
//   <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked />indian
//   <label className="form-check-label" for="radio1"></label>
// </div>
// </div>
// <div className='col-12 col-md-6'>
// <div className="form-check">
//   <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />International
//   <label class="form-check-label" for="radio2"></label>
// </div>
// </div>
// </div>

//             </div>
//             <div className="col">
//         <input type="text" className="form-control mt-3 controla" placeholder="login email" name="email" />
//       </div>
//       <div className="col">
//         <input type="password" className="form-control mt-3 controla" placeholder="login password" name="pswd" />
//       </div>
//       <div className='row'>
//       {/* <div className="col md-2">
//         <input type="text" className="form-control mt-3 control1" placeholder="+91" name="email" />
//       </div> */}
//       <div className="col md-12">
//         <input type="password" className="form-control control2 mt-3" placeholder="Mobile No" name="pswd" />
//       </div>
//       </div>
//       <p className='mt-3'>I authorise Amity University online and Its Associates to Contact 
//             me with notification ./updates via call /email/sms/Whatsapp which overrides DND/NDNC registation.
//            </p>
//            <div className="row">
//         <button type="button" className="form-control control3" placeholder="Start Your Application Now" name="pswd" >Start Your Application Now</button>
//         {/* <button></button> */}
//       </div>
//       <p>Already registered With us? Sign in Here</p>
//            </div>
          
//            {/* close */}
         
//            <div className='col md-2'></div>
//            </div>
//         </div>
    
//     )
// }
// export default Enrollnow2;



import { Link } from 'react-router-dom';
import './Enrollnow2.css';
import Navbarindex from "./Navbarindex";

function Enrollnow2() {
    return (
        <div className='container-fluid'>
           {/* <Navbarindex/> */}
           
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./images/amitylogo.svg" className="img-fluid" alt="Amity Logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                {/* <button type="button" className="btn btn-success ms-2 mt-2 sl" >STUDENT LOGIN</button> */}
                <button type="button" className="btn btn-success ms-2 mt-2 "  data-bs-toggle="modal" data-bs-target="#myModal">
         STUDENT LOGIN</button>
         {/* <button type="button" className="btn btn-warning ms-2 mt-2"><Link className="nav-link" to="/enrollnow2"></Link> ENROLL NOW</button> */}
        
                <button type="button" className="btn btn-warning ms-2 mt-2 sl">TOLL-FREE-18001023434</button>
              </ul>
            </div>
          </div>
        </nav>

        <div className='row'>
            <div className='col-md-2'></div>
            <div className="enrollnow col-md-8">
                <h2 className='mt-5 mx-5'>Create Your Account</h2>
                <p className='mt-3 mx-5'>Please Enter Details Below</p>
                
                <div className='d-flex'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="radio1">Indian</label>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                                <label className="form-check-label" htmlFor="radio2">International</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <input type="text" className="form-control mt-3 controla" placeholder="Login Email" name="email" />
                </div>
                <div className="col">
                    <input type="password" className="form-control mt-3 controla" placeholder="Login Password" name="password" />
                </div>
                <div className='row'>
                    <div className="col-md-12">
                        <input type="tel" className="form-control control2 mt-3" placeholder="Mobile No" name="mobile" />
                    </div>
                </div>

                <p className='mt-3'>
                    I authorize Amity University online and Its Associates to contact me with notification/updates via call/email/SMS/WhatsApp, which overrides DND/NDNC registration.
                </p>

                <div className="row">
                    <button type="button" className="form-control control3" name="apply">Start Your Application Now</button>
                </div>
                <p>Already registered with us? <a href="#">Sign in here</a></p>
            </div>
            <div className='col-md-2'></div>
        </div>


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
    </div>
    );
}
export default Enrollnow2;
