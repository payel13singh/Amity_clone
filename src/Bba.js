import Navbarindex from "./Navbarindex";
import './Bba.css';
import Showmore from "./Showmore";
import { useEffect, useRef } from "react";
import Careerimpact from "./CareerImpact";
import { Link } from "react-router-dom";
import Applynow from "./Applynow";
import Spynavbar from "./Spynavbar";

function Bba(){

    return(
        <div className="container-fluid">
      <Navbarindex/>
          {/* 2nd div */}
        
          <div className="row  mt-5">
            <div class="col-md-6 bbadiv ps-3">
                <h2 className="pgh1 m-5" ><u>PG PROGRAM</u></h2>
                <h1 className="mt-5 ms-5  pgh2"><i>Bachelor  of business Administration<br></br>
                (ONLINE BBA)<br></br>Duration 3 year</i></h1>
                <button type="button" className="btn btn-warning ms-5 mt-2"  data-bs-toggle="modal" data-bs-target="#applyModal" >
         APPLY NOW
          </button>


          <div className="modal" id="applyModal">
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h1 className="modal-title">CONNECT WITH OUR COUNSELLOR</h1>
        {/* <h1>nisha</h1> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
        <div className="row">
          <div className="col md-6">
            <img src="./images/applynow.jfif"height="540" width="420"/>
          </div>
          <div className="col md-6">
            <div className='m-2'>
          
            <p><i><u>Please provide the information below and our counselor will get in touch with you</u></i></p>
 
      <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="number" className="form-label">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="number"
                        placeholder="Enter phone number"
                        name="phone"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="pwd" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                      />
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
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

                {/* <button type="button" className="ms-5">Applynow</button> */}
                {/* <button type="button" className="btn btn-warning ms-2 mt-2"><Link className="nav-link" to="/applynow"> APPLY NOW</Link></button> */}
               
        
          {/* <div>
      <div className="container mt-3">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#applyModal" 
        >
          Apply Now
        </button>
      </div>

      The Modal
      <div className="modal fade" id="applyModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            Modal Header
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="myModalLabel">
                Connect With our Counsellor
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            Modal Body
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 mb-3 text-center">
                  <img
                    src="./images/Applynow.jfif"
                    alt="Apply Now"
                    className="img-fluid"
                  />
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12">
                  <p className="mb-4">
                    *Please provide the information below. Our counselor will
                    get in touch with you.
                  </p>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="number" className="form-label">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="number"
                        placeholder="Enter phone number"
                        name="phone"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="pwd" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                      />
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            Modal Footer
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */}



              
   


    {/* close apply model */}

            </div>
            <div className="col-md-6">
             <img src="./images/bba girl.webp" className="img-fluid mt-"/>
            </div>
        </div>
        {/* close */}
        {/* 3rd div start */}
        <div class="row mt-5">
            <div class="col-md-3">
                <div className="p-2 bg-success text-light adm">
                <h1 class="mx-4 mt-4">Admission</h1>
                <h1 class="mx-4">open</h1>
                <h3 class="mx-4">For july "24"</h3>
                <h3 class="mx-4">Session</h3>
                </div>
            </div>
        
            <div class="col-md-3">
                <div class="p-2 rs4583 ">
                <h1 class="mx-4 mt-5">RS.4,583</h1>
                <h1 class="mx-4">per month</h1>
                <h3 class="mx-4">starting EMI</h3>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="p-2 rs127">
                <h1 class="mx-4 mt-5">127</h1>
                <h1 class="mx-4">course</h1>
                <h3 class="mx-4">Credits</h3>
                </div>
            </div>
    
            <div class="col-md-3">
                <div class="p-2 rs25" >
                <h1 class="mx-4 mt-5">25</h1>
                <h1 class="mx-4">course</h1>
                <h3 class="mx-4">Credits</h3>
                </div>
            </div>
    
           </div>
           {/* <!-- 3rd div close --> */}
           {/* 4th div */}
        
          
<div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50" className="mt-5 sticky-top">
  <nav className="navbar navbar-expand-lg bg-success navbar-dark">
    <div className="container">
      {/* Navbar brand (optional) */}
      <a className="navbar-brand" href="#">Your Brand</a>

      {/* Toggle button for collapsing the navbar */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section1">OVERVIEW</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section2">PROGRAM HIGHLIGHTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section3">CURRICULUM</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section4">DEGREE OFFERED</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section6">ELIGIBILITY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section7">FEES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section8">CAREERS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4 spynv" href="#section9">FACULTY</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>



{/* <Spynavbar/> */}

 
        
        {/* <!-- 4th div close --> */}
        {/* 5th div */}
        <div className="row mt-5 div4" id="section1">
            <div className="col-md-7 div4one">
              <h1 className="mt-5 mx-5 div4two">Become An Industry Leader With<br></br> UGC-Recognized<br></br>
                Online BBA</h1> 
              <p className="mt-5 mx-5 div4three">Our Bachelor of Business Administration is a comprehensive 3-year (6 semester)
                 undergraduate program offering in-depth study <br></br>
                 of theoretical concepts and functional areas in<br></br>
                  Business Administration.<br></br> Earn your BBA degree conveniently, develop business acumen,<br></br>
                 learn from expert faculty, and collaborate with peers,<br></br>
                  all while balancing your commitments.</p> 
            </div>
            {/* <!-- <div class="col-md-"></div> --> */}
            <div className="col-md-5">
            <img src="./images/lwyer.webp" className="img-fluid"/>
            </div>
        </div>

        {/* 5th div close */}
        {/* 6div */}
        <div class="mt-5 div6" id="section2">
            <div class="row">
                <div class="col-md-7"><h1 className="div6one">Emerging specializations</h1></div>
                <div class="col-md-5"><p>New-age specializations shaping tomorrow's business landscape</p></div>
            </div>
            <hr></hr>
            <div class="row">
                <div class="col-md-3">
                    <div class="p-2 div6two">
                        <img src="./images/qs1.webp" class="img-fluid"/>
                        <h5>Emerging specializations</h5>
                        <p><i>New-age specializations shaping tomorrow's business landscape.</i></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-2 div6two ">
                        <img src="./images/acca.webp" class="img-fluid"/>
                        <h5>Robust Learning Model</h5>
                        <p><i>550+ hours of video lectures to help you maximize your learning</i></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-2 div6two">
                        <img src="./images/study.webp" class="img-fluid"/>
                        <h5>Personalized Learning</h5>
                        <p><i>Personalized learning through unique option of choice based credit system</i></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-2 div6two">
                        <img src="./images/real.webp" class="img-fluid"/>
                        <h5>Real World Projects</h5>
                        <p><i>Real world projects and case studies to help you succeed in your industry</i></p>

                    
                    </div>
                </div>
            </div>
            <hr></hr>

          </div>
        {/* 6div close */}
        {/* 7 div */}
        <div className=" mt-5  div7" id="section3">
            <h1 className="div7one"> Amity Online Advantages: Why were The Rights For You </h1>
            <hr></hr> 
            <br></br>
            <div class="row">
             <div class="col-md-3 " >
                <div class="p-3">
             <img src="./images/top indian.png" height="50"  width="50"/>
            <h5 class="mt-4"> Top Indian & Global Faculty</h5>
             <p  class="mt-3 div7two"> Get a world-class education from the faculty with rich academic and industry experience.</p>
             </div>
             </div>
        
         
            <div class="col-md-3">
                <div class="p-3">
             <img src="./images/career.png" height="50"  width="50"/>
            <h5 className="mt-4">Career Services For Job Readiness</h5>
             <p className="mt-3 div7two">Take MasterClass for interview preparation & resume building sessions while pursuing your degree.</p>
            </div>
            </div>

     
            <div class="col-md-3">
                <div class="p-3">
             <img src="./images/choose.png" height="50"  width="50"/>
            <h6 class="mt-4"> Choose The Way You Want To Learn</h6>
             <p class="mt-3 div7two">Enhance your learning potential through your choice of printed books, audio books, e-books, videos, and campus library resources.</p>
            </div>
            </div>
     

     
            <div class="col-md-3">
                <div class="p-3">
             <img src="./images/placement.png" height="50"  width="50"/>
             <h5 class="mt-4">Placement Assistance</h5>
              <p class="mt-3 div7two">Ensure a smooth job transition with placement opportunities from over 500+ recruiters across domains.</p>
         </div>
         </div>
            </div>
         </div>
        {/* 7 div close */}
        {/* <!-- our Accreditation and recognisation 8 div --> */}
           <div className="mt-5 div8">
            <div className="row">
              <div className="col-md-6">
              <h2 className="pt-4 divh2 mx-4">Our Accereditation & Recognitions</h2>
                   </div>
          
              <div className="col-md-6">
                  <p className="px-5">Endoresements of Academic<br></br>Quality & Excellence</p>
              </div>
            </div>
            <hr></hr>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators ">
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" class="bg-dark" aria-label="Slide 2"></button>
                </div>
      
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div>
                      <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src="./images/circle1.webp"  height= "70" width ="100" className="div8img" />
                            <p className="pt-2 px-2">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div>
                        <div className="col-md-4 d-flex" >
                            <img src="./images/circle2.webp" height= "70" width ="100" className="div8img"/>
                            <p className="div8img1">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./images/circle3.webp" height= "70" width ="100"/>
                            <p className="div8img1">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div>
                      </div>
                      <div class="row mt-5" >
                        <div class="col-md-4 d-flex">
                            <img src="./images/circle7.webp"  height= "70" width ="100"className="divimg8"/>
                            <p className="div8img1 ms-1">RANKED TOP 50 & ASIA PACIFIC TOP 10</p>
                        </div>
                        <div class="col-md-4 d-flex" >
                            <img src="./images/circle5.webp" height= "70" width ="100"/>
                            <p className="div8img1">RANKED AMONG TOP 3% GLOBALLY</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./images/circle6.webp"  height= "70" width ="100"/>
                            <p className="div8img1">DEGREE PROGRAMS OPPROVED BY ALL INDIA <br></br>INDIA COUNCIL OF TECHNICAL EDUCATION</p>
                        </div>
                      </div>
                   </div>
                </div>
                <div class="carousel-item mx-3">
                  <div>
                      <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src="./images/circle1.webp" height= "70" width ="100"/>
                            <p className="div8img1" class="pt-2 px-2">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div>
                        <div class="col-md-4 d-flex" >
                            <img src="./images/circle2.webp"  height= "70" width ="100"/>
                            <p className="div8img1">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./images/circle4green.webp" height= "70" width ="100"/>
                            <p className="div8img1">WES ACCREDITED IN CANADA.</p>
                        </div>
                      </div>
                      <div class="row mt-5" >
                        <div class="col-md-4 d-flex">
                            <img src="./images/circle7.webp" height= "70" width ="100"/>
                            <p className="div8img1">RANKED TOP 50 & ASIA PACIFIC TOP 10</p>
                        </div>
                        <div class="col-md-4 d-flex" >
                            <img src="./images/circle5.webp" height= "70" width ="100"/>
                            <p className="div8img1">RANKED AMONG TOP 3% GLOBALLY</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./images/circle6.webp" height= "70" width ="100"/>
                            <p className="div8img1">INDIA S FIRST PRIVATE UNIVERSITY TO BE A MEMBER</p>
                        </div>
                      </div>
                      </div>
      
      
                </div>
              </div>
      
            </div>
      
         </div>
            {/* <!-- 8 div close --> */}
            {/* <!--  program overview structure 9 div start --> */}
           
            
        
             <div className="row mt-5 div9" id="section4">
  <div className="col-md-7">
    <h1 className="mt-2 div9h1">Program Overview & Structure</h1>
    <hr />
    
    <div className="accordion" id="accordionExample">
      {/* <!-- Semester 1 --> */}
      <div className="card">
        <div className="card-header">
          <a className="btn" data-bs-toggle="collapse" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
            <h4><i>Semester 1</i></h4>
          </a>
        </div>
        <div id="collapse1" className="collapse" data-bs-parent="#accordionExample">
          <div className="card-body bg-dark text-white">
            <p>1. Accounting Fundamentals</p>
            <p>2. Principles of Marketing</p>
            <p>3. Management Foundation</p>
            <p>4. Business Statistics</p>
            <p>5. Business Communication</p>
          </div>
        </div>
      </div>
      <hr />

      {/* <!-- Semester 2 --> */}
      <div className="card">
        <div className="card-header">
          <a className="btn" data-bs-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
            <h4><i>Semester 2</i></h4>
          </a>
        </div>
        <div id="collapse2" className="collapse" data-bs-parent="#accordionExample">
          <div className="card-body bg-dark text-white">
            <p>1. Fundamentals of Human Resource Management</p>
            <p>2. Fundamentals of Financial Management</p>
            <p>3. Individual Excellence and Social Dynamic</p>
            <p>4. IT Applications in Business</p>
            <p>5. Environmental Studies</p>
          </div>
        </div>
      </div>
      <hr />

      {/* <!-- Semester 3 --> */}
      <div className="card">
        <div className="card-header">
          <a className="btn" data-bs-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
            <h4><i>Semester 3</i></h4>
          </a>
        </div>
        <div id="collapse3" className="collapse" data-bs-parent="#accordionExample">
          <div className="card-body bg-dark text-white">
            <p>1. Essentials of Production and Operations Management</p>
            <p>2. Principles of Organizational Behaviour</p>
            <p>3. Research Methods for Managers</p>
          </div>
        </div>
      </div>
      <hr />

      {/* <!-- Semester 4 --> */}
      <div className="card">
        <div className="card-header">
          <a className="btn" data-bs-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
            <h4><i>Semester 4</i></h4>
          </a>
        </div>
        <div id="collapse4" className="collapse" data-bs-parent="#accordionExample">
          <div className="card-body bg-dark text-white">
            <p>1. Fundamentals of Entrepreneurship</p>
            <p>2. Principles of Consumer Behaviour</p>
            <p>3. Operations Research</p>
          </div>
        </div>
      </div>
      <hr />

      {/* <!-- Semester 5 --> */}
      <div className="card">
        <div className="card-header">
          <a className="btn" data-bs-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
            <h4><i>Semester 5</i></h4>
          </a>
        </div>
        <div id="collapse5" className="collapse" data-bs-parent="#accordionExample">
          <div className="card-body bg-dark text-white">
            <p>Business Strategy</p>
            <p>Marketing in Digital Age</p>
            <p>Managing Customer Relationships</p>
            <p>Professional Ethics</p>
          </div>
        </div>
      </div>
      <hr />

      {/* <!-- Semester 6 --> */}
      <div className="card">
        <div className="card-header">
          <a className="btn" data-bs-toggle="collapse" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
            <h4><i>Semester 6</i></h4>
          </a>
        </div>
        <div id="collapse6" className="collapse" data-bs-parent="#accordionExample">
          <div className="card-body bg-dark text-white">
            <p>Dissertation</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>

  {/* <!-- Right Column Content --> */}
  <div className="col-md-5" id="section4">
    <h1 className="mt-2 div9h2">ONLINE MBA DEGREE</h1>
    <hr />
    <img src="./images/letter.webp" className="img-fluid" alt="MBA Program" />
    <p className="div9p"><i>Master of Business Administration (MBA) online program created by Amity Online provides a holistic view of business management that covers modern tools and practices while empowering you to manage critical business decisions.</i></p>
  </div>
</div>









                
                <hr></hr>
                {/* <!-- Eligibility criteria 10 div start --> */}
                <div>
                <div className="row   mt-5 div10"  id="section6">
                    <div className="col-md-5 px-5">
                      <h1 className="p-2 div10h1" >Eligibility Criteria</h1>
                      <hr></hr>
                      <p class="p-3"><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />Fresh 10+2 pass out students or aspirants seeking a career in business management..</p>
                        
                      <p class="p-3"><img src="./images/doneIcon.webp"
                      width= "20" height= "20" /> Entrepreneurs looking to  enhance  their skills in business management.</p>
                    
                       <p class="p-3"><img src="./images/doneIcon.webp"
                      width= "20" height= "20" /> Aspirants who want to understand topics of wide relevance including Human Resource, Banking, Law and Accounting from a Business Management perspective..</p> 
                       <p class="p-3"><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />Applicant must possess sufficient knowledge and understanding of English Language.</p>
                    </div>
                    <div class="col-md-2">
                        <div></div>
                    </div>
                    <div class="col-md-5 pt-2 px-5">
                        <div className="div10h3"><h3 class="px-3">For Indian Students</h3></div>
                        <p><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />10th Class Certificate (Completing 10 years of formal schooling)</p>
                        <p><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />12th Class Certificate (Completing 12 years of formal schooling).</p>
                        <div className="div10h3"><h3 class="px-3">For Foreign Students</h3></div>
                        <p><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />O Level Certificate (Completing 10 years of formal schooling. Diploma not accepted)</p>
                        <p><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />A Level Certificate (Completing 12 years of formal schooling. Diploma not accepted)</p>
                        <p><img src="./images/doneIcon.webp"
                      width= "20" height= "20" />A Level Certificate (Completing 12 years of formal schooling. Diploma not accepted)</p>
                    </div>
                  </div>
                  <div className="row mt-5 div10" id="section6">
  <div className="col-md-5 col-sm-12 px-5">
    <h1 className="p-2 div10h1">Eligibility Criteria</h1>
    <hr />
    <p class="p-3">
      <img src="./images/doneIcon.webp" width="20" height="20" />
      Fresh 10+2 pass out students or aspirants seeking a career in business management.
    </p>

    <p class="p-3">
      <img src="./images/doneIcon.webp" width="20" height="20" />
      Entrepreneurs looking to enhance their skills in business management.
    </p>

    <p class="p-3">
      <img src="./images/doneIcon.webp" width="20" height="20" />
      Aspirants who want to understand topics of wide relevance including Human Resource, Banking, Law, and Accounting from a Business Management perspective.
    </p>

    <p class="p-3">
      <img src="./images/doneIcon.webp" width="20" height="20" />
      Applicant must possess sufficient knowledge and understanding of the English Language.
    </p>
  </div>

  <div class="col-md-2 col-sm-12">
    <div></div>
  </div>

  <div class="col-md-5 col-sm-12 pt-2 px-5">
    <div className="div10h3">
      <h3 class="px-3">For Indian Students</h3>
    </div>

    <p>
      <img src="./images/doneIcon.webp" width="20" height="20" />
      10th Class Certificate (Completing 10 years of formal schooling)
    </p>

    <p>
      <img src="./images/doneIcon.webp" width="20" height="20" />
      12th Class Certificate (Completing 12 years of formal schooling).
    </p>

    <div className="div10h3">
      <h3 class="px-3">For Foreign Students</h3>
    </div>

    <p>
      <img src="./images/doneIcon.webp" width="20" height="20" />
      O Level Certificate (Completing 10 years of formal schooling. Diploma not accepted)
    </p>

    <p>
      <img src="./images/doneIcon.webp" width="20" height="20" />
      A Level Certificate (Completing 12 years of formal schooling. Diploma not accepted)
    </p>

    <p>
      <img src="./images/doneIcon.webp" width="20" height="20" />
      A Level Certificate (Completing 12 years of formal schooling. Diploma not accepted)
    </p>
  </div>
</div>
</div>

                {/* <!-- 10 div close -->   */}
                {/* <!-- fee structure start 11 div --> */}
                <div className="div11 mt-5" id="section7">
                <h1  className="mt-1 div11h3 ms-5">Fee Structure</h1>
                <hr></hr>
                <div class="row">
                    <div className="col-md-4 ">
                        <div className="p-2  mx-4 div11h2"><p class="p-4">24 Months EMI </p>
                        <h1 className="p-3 div11h1">rs.4,583</h1>
                    </div>
                    <p className="px-5 pt-3"><a href="#">Click to see  emi option</a></p>
                    </div>
                    <div className="col-md-4 ">
                        <div className="p-3 bg-light div11h">
                            <p className="p-4">per Semester Fee</p>
                            <h1 className="p-2 div11h1">rs.27,500</h1>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="p-2 bg-light div11h">
                        <p className="p-4">full Course Fee</p>
                        <h1 className="p-3 div11h1">rs.1,65,000</h1>
                      </div>  
                    </div>

                </div>
              </div>
                {/* <!-- 11th div close --> */}
                {/* <!-- admission process 12 div --> */}
              <div className="mt-5 div12" >
                <div className="mt-5"><h1 className=" mx-5 text-primary div12h1">Admission Process <hr></hr></h1></div>
                        <div className="row">    
                        <div className="col-md-1"></div>
                        <div className="col-md-2"><img src="./images/ap1.webp" className="img-fluid" height="100" width="100"/>
                        <h5 className="mt-3">01.Select Your Program</h5>
                        <p className="div12p">choose the program that suits your Goals</p></div>
                        <div className="col-md-2"><img src="./images/ap2.webp" className="img-fluid" height="100" width="100"/>
                        <h5 className="mt-3">02. Complete Your Application</h5>
                        <p className="div12p">Fill out your application with all the necessary information</p></div>
                        <div className="col-md-2"><img src="./images/ap3.webp" className="img-fluid" height="100" width="100"/>
                        <h5 className="mt-3">03. Pay Your Program Fees</h5>
                        <p className="div12p">Make your program payment securely & easily</p></div>
                        <div className="col-md-2"><img src="./images/ap1.webp" className="img-fluid" height="100" width="100"/>
                        <h5 className="mt-3">04. Submit & Register</h5>
                        <p className="div12p">Submit your application and complete your registration</p></div>
                        <div className="col-md-2"><img src="./images/ap1.webp" className="img-fluid" height="100" width="100"/>
                        <h5 className="mt-3">05. Await Enrollment Details</h5>
                        <p className="div12p">Wait for enrollment details & further guidance</p></div>
                        <div className="col-md-1"></div>
                    
                </div>
            
              </div>
              {/* <!-- 12 div close --> */}
              {/* <!-- jurney towards online degree program 13 div  --> */}
             
                {/* close */}
                <div class="mt-5 div13">
    <h1 class="div13h1">JOURNEY TOWARDS GRADUATION: YOUR ONLINE DEGREE PROGRAM EXPERIENCE</h1>
    <hr></hr>
    <div class="row">
        <div class="col-md-6">
            {/* <!-- Wrapper div for the accordion --> */}
            <div id="accordion">
                {/* <!-- Collapse Start --> */}
                <div class="card">
                    <div class="card-header">
                        <a class="btn" data-bs-toggle="collapse" href="#collapseone11">
                            <h4><i>Online Orientation</i></h4>
                        </a>
                    </div>
                    <div id="collapseone11" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body bg-dark text-white div13h2">
                            <p>Attend orientation sessions to familiarize yourself with the program, university policies, and resources.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* <!-- Collapse End --> */}

                {/* <!-- Collapse Start --> */}
                <div class="card">
                    <div class="card-header">
                        <a class="btn" data-bs-toggle="collapse" href="#collapsetwo22">
                            <h4><i>On-campus Meet</i></h4>
                        </a>
                    </div>
                    <div id="collapsetwo22" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body bg-dark text-white div13h2">
                            <p>Meet your peers and faculty at an on-campus event.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* <!-- Collapse End --> */}

                {/* <!-- Collapse Start --> */}
                <div class="card">
                    <div class="card-header">
                        <a class="btn" data-bs-toggle="collapse" href="#collapsethree33">
                            <h4><i>Academic Progress</i></h4>
                        </a>
                    </div>
                    <div id="collapsethree33" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body bg-dark text-white div13h2">
                            <p>Attend live and recorded classes, complete your assignments, and maintain a strong academic performance.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* <!-- Collapse End --> */}

                {/* <!-- Collapse Start --> */}
                <div class="card">
                    <div class="card-header">
                        <a class="btn" data-bs-toggle="collapse" href="#collapsefour44">
                            <h4><i>Utilize Resources</i></h4>
                        </a>
                    </div>
                    <div id="collapsefour44" class="collapse" data-bs-parent="#accordion">
                        <div class="card-body bg-dark text-white div13h2">
                            <p>Avail library resources at the Noida campus, online learning resources, and academic support services to enhance your learning.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* <!-- Collapse End --> */}
            </div>
        </div>

        <div class="col-md-6">
            <img src="./images/greenshirt.webp" class="img-fluid" alt="Image" />
        </div>
    </div>
</div>

                {/* <!-- close 13 div  --> */}
                {/* <!-- potential  job roles 14 div --> */}
                   <div className="mt-5 div14" >
                    <h1 className="mt-4 mx-4 div14h1" >Potential Job Roles</h1>
                    <hr></hr>
                    <div className="row">
                        <div className= "col-md-4">
                        <div class="p-2 div14m">
                                <h3 className="div14h3">ENTRY LEVEL</h3>
                                <p><img src="./images/doneIcon.webp"width="20" height="20 "/> Management Trainee</p>
                                
                                   <p><img src="./images/doneIcon.webp"width="20" height="20" />FINANCIAL ANALYST</p>
                                
                                    <p><img src="./images/doneIcon.webp"width="20" height="20"/>MARKETING COORDINATE</p>
                                   
                                     <p><img src="./images/doneIcon.webp"width="20" height="20"/>Financial Analyst</p>
                        
                                     <p><img src="./images/doneIcon.webp"width="20" height="20"/>Operations Executive</p>
                                
                                     <p><img src="./images/doneIcon.webp"width="20" height="20"/>Human Resource Executive</p>



                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-2 div14m">
                                <h3 className="div14h3">MID LEVEL</h3>
                                <p>Marketing Manager</p>
                                
                                 <p><img src="./images/doneIcon.webp"width="20" height="20"/>Human Resource Manager</p>
                            
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>OPREATIONS Manager</p>
                            
                                  <p> <img src="./images/doneIcon.webp"width="20" height="20"/>MARKETING Manager</p>
                            
                                   <p><img src="./images/doneIcon.webp"width="20" height="20"/>BUSINESS ANALYST</p>
                                
                                    <p><img src="./images/doneIcon.webp"width="20" height="20"/>FINANCIAL CONTROLLER</p>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-2 div14h">
                                <h3 className="div14h3 ">ADVANCED LEVEL</h3>
                                <p><img src=""/>Director of Operations</p>
                                
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>Chief  Officer (CFO)</p>
                                    
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>DIRECTOR MARKETING</p>
                            
                                   <p><img src="./images/doneIcon.webp"width="20" height="20"/>DIRECTOR FINANCE</p>
                                
                                   <p><img src="./images/doneIcon.webp"width="20" height="20"/>BUSINESS DEVLOPMENT(CEO)</p>
                        
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>Chief EXCUTIVE  Officer</p>

                            </div>
                        </div>
                    </div>


                </div>
                {/* <!-- 14 div close --> */}
                {/* <!-- hiring partners 16 div --> */}
                   <div class="mt-5 div16">
                    <h1 class="pt-4 mx-4 div16h1">HIRING PARTNERS</h1>
                    <hr></hr>

                <div class="row">
                    <div class="col-md-1"></div>
    
                
                    <div class="col-md-2"> 
                        <img src="./images/h1.webp"class="img-fluid mt-5" width="150"/></div>
                    <div class="col-md-2">
                        <img src="./images/h2.webp"class="img-fluid" width="150"/>
                    </div>
                
                    <div class="col-md-2">
                        <img src="./images/h3.webp"class="img-fluid mt-5" width="150"/>
                    </div>

                    <div class="col-md-2">
                        <img src="./images/h4.webp"class="img-fluid mt-5" width="150"/>
                    </div>
                
                    <div class="col-md-2">
                        <img src="./images/h5.webp"class="img-fluid mt-5" width="150"/>
                    </div>
                    <div class="col-md-1"></div>

                
                </div>
              </div>
              {/* <!-- 16 div close --> */}
              
              <Careerimpact/>
              {/* <!-- are you redy to take the next step 18 div  --> */}
                 <div class="row mt-5">
                    <div class="col-md-6 text-white div18" >
                        <h1>Are You Ready To Take The Next Step In Your Career ?</h1>
                    </div>
                    <div class="col-md-6">
                     <img src="./images/graduate.webp"class="img-fluid rounded "/>
                    </div>
                </div>

                {/* <!-- 18 div close --> */}
                {/* <!-- frequently Asked Question 19 div --> */}
               
                  <div className="mt-5 div19">
    <h1 className="mt-5 mx-5 div19h1">Frequently Asked Questions</h1>
    
    <div className="accordion" id="accordionExample">
        {/* <!-- Question 1 --> */}
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h4><i>What Is Our BBA degree at Amity Online all about?</i></h4>
                </a>
            </div>
            <div id="collapseOne" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Our program offers a comprehensive business management perspective, encompassing contemporary tools and decision-making skills. Amity's Online MBA stands as India's sole online MBA program.</p>
                </div>
            </div>
        </div>
        <hr />

        {/* <!-- Question 2 --> */}
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                    <h4><i>Is This Program UGC Approved?</i></h4>
                </a>
            </div>
            <div id="collapseTwo2" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Yes, we are India’s first online university approved by the University Grants Commission. Please check the link for further information -</p>
                </div>
            </div>
        </div>
        <hr />

        {/* <!-- Question 3 --> */}
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                    <h4><i>What Is The Eligibility Criteria?</i></h4>
                </a>
            </div>
            <div id="collapseThree3" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Aspiring candidates with a Bachelor’s degree or Graduate Certificate in any discipline from a recognized university can apply for this program.</p>
                </div>
            </div>
        </div>
        <hr />

        {/* <!-- Question 4 --> */}
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseFour4" aria-expanded="false" aria-controls="collapseFour">
                    <h4><i>Do You Offer Placement Assistance?</i></h4>
                </a>
            </div>
            <div id="collapseFour4" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Yes, our Virtual Job Fair at Amity University Online offers comprehensive placement assistance. It's a unique digital platform connecting various recruiters across disciplines.</p>
                </div>
            </div>
        </div>
        <hr />

        {/* <!-- Question 5 --> */}
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseFive5" aria-expanded="false" aria-controls="collapseFive">
                    <h4><i>How Are The Exams Conducted In Online Mode?</i></h4>
                </a>
            </div>
            <div id="collapseFive5" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Examinations are conducted through the Online Technology Enabled Proctored mode. The exam pattern comprises internal and external assessments, with a weightage of 30% for internal assignments and 70% for end-term exams, including subjective, case studies, and MCQs.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<br></br>
<br></br>


                  <Showmore/>
    


    {/* <Applynow/> */}
    </div>
    

    )
}
export default Bba;