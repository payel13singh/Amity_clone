import Applynow from './Applynow';
import './Bca.css'
import Careerimpact from './CareerImpact';
import Navbarindex from './Navbarindex';
import Showmore from './Showmore';
function Bca(){
    return(
        <div className=' '>
          <Navbarindex/>
 {/* <!-- 2nd div start --> */}
 <div class="row mt-5">
        <div class="col-md-6 bbadiv ms-5">
            <h2 className="program pgh1 m-5" >PG PROGRAM</h2>
            <h1 className=" mt-5 ms-5  pgh2 ">Bachelor of computer Application
        <br></br>Duration 2 year</h1>
        <button type="button" className="btn btn-warning ms-5 mt-2"  data-bs-toggle="modal" data-bs-target="#applyModal" >
         APPLY NOW
          </button>

          {/* close */}
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

          {/* close */}

        </div>
        <div class="col-md-6">
         {/* <img src="./bcaimages/mbaboy.webp" class="img-fluid"/> */}
         <img src="./bcaimages/bca boy.webp" className="img-fluid ms-3"/>
         {/* <img src={'./bcaimages/top indian.png'} /> */}
        </div>
    </div>



   
    {/* close */}
    {/* <!-- 3rd div start --> */}
      <div className="row mt-5 m-3">
        <div className="col-md-3">
            <div className="p-2 text-light open">
            <h1 className="mx-4 mt-4">Admission</h1>
            <h1 className="mx-4">open</h1>
            <h3 className="mx-4">For july "24"</h3>
            <h3 className="mx-4">Session</h3>
            </div>
        </div>
    
        <div className="col-md-3">
            <div className="p-2 permonth ">
            <h1 className="mx-4 mt-5">RS.4,167</h1>
            <h1 className="mx-4">per month</h1>
            <h3 className="mx-4">starting EMI</h3>
            </div>
        </div>
        
        <div className="col-md-3">
            <div className="p-2 course ">
            <h1 className="mx-4 mt-5">134</h1>
            <h1 className="mx-4">course</h1>
            <h3 className="mx-4">Credits</h3>
            </div>
        </div>

        <div class="col-md-3">
            <div class="p-2 course29">
            <h1 class="mx-4 mt-5">29</h1>
             <h3 class="mx-4">Courses</h3>
            </div>
        </div>
     </div>
       {/* <!-- 3rd div close --> */}
       {/* <!-- nav bar 4th div start --> */}
            {/* <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50" class="mt-5 sticky-top" >

                <nav className="navbar navbar-expand-sm bg-success navbar-dark navbar-collapse" >
                  <div className="container-fluid">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link mx-4" href="#section1">OVERVIEW</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mx-4" href="#section2">PROGRAM HIGHLIGHTS</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link mx-1" href="#section3">CURRICULUM</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#section4">DEGREE OFFERED</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#section5">SPECIALIZATION</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a class="nav-link" href="#section6">ELIGIBILITY</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#section7">FEES</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#section8">CARRERS</a>
                      </li>
                      <li className="nav-item mx-4">
                        <a className="nav-link" href="#section9">FACULATY</a>
                      </li>
                    </ul>
                  </div>
                  </nav>
                  </div> */}
            

            <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50" className="m-3 mt-5 sticky-top">
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
            {/* <!-- 4th div close --> */}
            {/* <!-- fifth div start --> */}
            <div className="row mt-5 bcamain" id="section1">
            <div className="col-md-7 bca5">
              <h1 className="mt-5 mx-5 build">Build Your Career With UGC<br></br> Recognized Online BCA</h1> 
              <p  className="mt-5 mx-5 bcap"><i>
                Bachelor of Computer Applications is a 3 years (6 semesters) <br></br>
                 course that will teach you the basics of software<br></br>
                  development and assist you in setting up a sound career in<br></br>
                   the field of computer applications as a software engineer,,<br></br> 
                   web designer or system analyst. Work on real-world<br></br>
                    projects, get mentoring sessions and complete your degree online........

            
              </i></p>
            </div>
            {/* <!-- <div class="col-md-"></div> --> */}
            <div class="col-md-5">
            <img src="./bcaimages/lwyer.webp" className="img-fluid"height ="500"/>
            </div>
        </div>
        {/* <!-- fifth div close --></br>  */}
        {/* <!-- program highlights and advantage six div  --> */}
            <div class="mt-5 pha" id="section2" >
                <div class="row">
                    <div class="col-md-7 es"><h1>Emerging specializations</h1></div>
                    <div class="col-md-5"><p>New-age specializations shaping tomorrow's business landscape</p></div>
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./bcaimages/qs1.webp" class="img-fluid"/>
                            <h5>Emerging specializations</h5>
                            <p><i>New-age specializations shaping tomorrow's business landscape.</i></p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./bcaimages/acca.webp" class="img-fluid"/>
                            <h5>Robust Learning Model</h5>
                            <p><i>550+ hours of video lectures to help you maximize your learning</i></p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./images/study.webp" class="img-fluid"/>
                            <h5>Personalized Learning</h5>
                            <p><i>Personalized learning through unique option of choice based credit system</i></p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./bcaimages/real.webp" class="img-fluid"/>
                            <h5>Real World Projects</h5>
                            <p><i>Real world projects and case studies to help you succeed in your industry</i></p>
    
                        
                        </div>
                    </div>
                </div>
                <hr></hr>
    
              </div>
            {/* <!-- six div close --> */}
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
           <div class="mt-5 bca8 ">
            <div class="row">
              <div class="col-md-6">
              <h2 class="pt-4 mx-4 oa">Our Accereditation & Recognitions</h2>
                   </div>
          
              <div class="col-md-6">
                  <p className='academic'>Endoresements of Academic<br></br>Quality & Excellence</p>
              </div>
            </div>
            <hr></hr>
            {/* <!-- first div=6 pic --> */}
      
      
      
         {/* <!-- 6 pic close --> */}
      
      
      
      
          <div id="carouselExampleControls" class="carousel slide m-5" data-bs-ride="carousel">
              <div className="carousel-indicators  m-2">
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
                </div>
      
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div>
                      <div class="row ">
                        <div class="col-md-4 d-flex justify-content-center">
                            <img src="./bcaimages/circle1.webp"  className="img-fluid bcaimg" height="70" width="100"/>
                            <p class="pt-2 px-2 parab">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div>
                        <div class="col-md-4 d-flex" >
                            <img src="./bcaimages/circle2.webp"  className="img-fluid bcaimg" height="70" width="100" />
                            <p className='parab'>INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./bcaimages/circle3.webp" class="img-fluid bcaimg"  height="70" width="100"/>
                            <p className='parab'>INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div>
                      </div>
                      <div class="row mt-5" >
                        <div class="col-md-4 d-flex">
                            <img src="./bcaimages/circle7.webp"  class="img-fluid bcaimg" height="70" width="100" />
                            <p className='parab2'>RANKED TOP 50 & ASIA PACIFIC TOP 10</p>
                        </div>
                        <div class="col-md-4 d-flex" >
                            <img src="./bcaimages/circle5.webp" 
                           class="img-fluid bcaimg" height="70" width="100"/>
                            <p className='parab'>RANKED AMONG TOP 3% GLOBALLY</p>
                        </div >
                        <div className="col-md-4 d-flex">
                            <img src="./bcaimages/circle6.webp"
                           className="img-fluid bcaimg" height="70" width="100" />
                            <p className='parab'>DEGREE PROGRAMS OPPROVED BY ALL INDIA <br></br>INDIA COUNCIL OF TECHNICAL EDUCATION</p>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                  <div>
                      <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src="./bcaimages/circle1.webp"
                           className="img-fluid bcaimg" height="70" width="100" />
                        <p className="pt-2 px-2">INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div>
                        <div className="col-md-4 d-flex" >
                            <img src="./bcaimages/circle2.webp"
                           className="img-fluid bcaimg" height="70" width="100"/>
                            <p className='parab'>INDIA S ONLY ONLINE MBA RANKED BY QS <br></br>GLOBAL TOP 50 & ASIA PACIFIC TOP 10.</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./bcaimages/circle4green.webp" className="img-fluid bcaimg"  height="70" width="100"/>
                            <p className='parab'>WES ACCREDITED IN CANADA.</p>
                        </div>
                      </div>
                      <div class="row mt-5" >
                        <div class="col-md-4 d-flex">
                            <img src="./bcaimages/circle7.webp
                          " className="img-fluid bcaimg" height="70" width="100" />
                            <p className='parab'>RANKED TOP 50 & ASIA PACIFIC TOP 10</p>
                        </div>
                        <div className="col-md-4 d-flex" >
                            <img src="./bcaimages/circle5.webp"
                           className="img-fluid bcaimg" height="70" width="100" />
                            <p className='parab'>RANKED AMONG TOP 3% GLOBALLY</p>
                        </div >
                        <div class="col-md-4 d-flex">
                            <img src="./bcaimages/circle6.webp" className="img-fluid bcaimg "  height="70" width="100"/>
                            <p className='parab'>INDIA S FIRST PRIVATE UNIVERSITY TO BE A MEMBER</p>
                        </div>
                      </div>
                      </div>
      
      
                </div>
              </div>
      
            </div>
      
         </div>
            {/* <!-- 8 div close -->  */}

            {/* <!-- program overview structure 9 div start --> */}
            <div className=" row  bca9"  id="section4" >
                <div className="col-md-7">
                  <h1  className="mt-2 bcao">Program Overview & Structure</h1>
                  <hr></hr>
                  <div id="accordion" className="mt-5">
                  <div class="card">
                    <div class="card-header">
                      <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                         <h4><i>Semester 1</i></h4>
                      </a>
                    </div>
                    <div id="collapseOne" class="collapse " data-bs-parent="#accordion">
                      <div class="card-body bg-dark text-white bcacard">
                          <p>Computer and information technology</p>
                           <p>2.Basic Mathematics </p>
                              <p>3.Programming in c </p>
                               <p>4.Business Communication</p>
                           <p>5.Human computer interaction</p>
                      </div>
                    </div>
                  </div> 
                  <hr></hr>
                  {/* <!-- sem 1 close --> */}
                  <div class="card">
                    <div class="card-header">
                      <a class="btn" data-bs-toggle="collapse" href="#collapsetwo">
                         <h4><i>Semester 2</i></h4>
                      </a>
                    </div>
                    <div id="collapsetwo" class="collapse " data-bs-parent="#accordion">
                      <div class="card-body bg-dark text-white bcacard">
                        <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid'/>1.Data Structure using C</p>
                        <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid'/>2.Operating System Concepts</p>
                         <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid'/>3.Individual Excellence and Social Dynamic</p>
                          <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid'/>4.Environmental Studies</p>
                            <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid'/>5.Software Engineering and Modeling</p>
                         </div>
                    </div>
                  </div> 
                  <hr></hr>
                  {/* <!-- sem2 close --> */}
                  <div class="card">
                    <div class="card-header">
                      <a class="btn" data-bs-toggle="collapse" href="#collapsethree">
                         <h4><i>Semester 3</i></h4>
                      </a>
                    </div>
                    <div id="collapsethree" class="collapse " data-bs-parent="#accordion">
                      <div class="card-body bg-dark text-white bcacard">
                        <p><img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>Computational Statistics</p>
                         <p> <img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>Introduction to Data Base Management Systems</p>
                           <p><img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>Green computing</p>
                           <p><img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>Network Basics</p>
                         <p> <img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>Object Oriented Programming Using Java</p>
                         </div>
                    </div>
                  </div> 
                  <hr></hr>
                  {/* <!-- sem3 close --> */}
                  <div class="card">
                    <div class="card-header">
                      <a class="btn" data-bs-toggle="collapse" href="#collapsefour">
                         <h4><i>Semester 4</i></h4>
                      </a>
                    </div>
                    <div id="collapsefour" class="collapse " data-bs-parent="#accordion">
                      <div class="card-body bg-dark text-white bcacard" >
                        <p> <img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>Augmented Reality and Virtual Reality</p>
                        <p><img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>2.Unix Operating System and Shell Programming</p>
                             <p><img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid' />3.Python Programming</p>
                               </div>
                       </div>
                 </div> 
                  <hr></hr>
                  {/* <!-- sem 4 close --> */}
                  <div class="card">
                    <div class="card-header">
                      <a class="btn" data-bs-toggle="collapse" href="#collapsefive">
                         <h4><i>Semester 5</i></h4>
                      </a>
                    </div>
                    <div id="collapsefive" class="collapse " data-bs-parent="#accordion">
                      <div class="card-body bg-dark text-white bcacard">
                        <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid'/>Augmented Reality and Virtual Reality</p>
                        <p> <img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>2.Unix Operating System and Shell Programming</p>
                             <p> <img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid'/>3.Python Programming</p>
                               </div>
                       </div>
                 </div> 
                  <hr></hr>
                  {/* <!-- sem 5 close --> */}
                  <div class="card">
                    <div class="card-header">
                      <a class="btn" data-bs-toggle="collapse" href="#collapsesix">
                         <h4><i>Semester 6</i></h4>
                      </a>
                    </div>
                    <div id="collapsesix" className="collapse " data-bs-parent="#accordion">
                      <div class="card-body bg-dark text-white bcacard">
                        <p><img src="./bcaimages/doneIcon.webp"width= "20" height= "20" className='img-fluid' />1.Augmented Reality and Virtual Reality</p>
                        <p><img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid' />2.Unix Operating System and Shell Programming</p>
                             <p> <img src="./bcaimages/doneIcon.webp" width= "20" height= "20" className='img-fluid' />3.Python Programming</p>
                               </div>
                       </div>
                 </div> 
                  <hr></hr>
                  {/* <!-- sem 6 close --> */}

                   </div>
                   </div>
                   {/* <!-- close --> */}
                    <div class="col-md-5">
                        <h1 className="mt-2 degree">Degree offered by us.</h1>
                        <hr></hr>
                        <img src="./bcaimages/letter.webp" className="img-fluid"/>
                        <p><i>Amity Online's 2 year MCA program provides a strong foundation in programming languages, catering to both professionals and beginners, fostering cross-functional expertise in a dynamic economy.</i></p>
                    </div>
                
                </div>
                {/* 9div close */}
                        {/* <!-- Eligibility criteria 10 div start --> */}
                <div className="row  mt-5 div10bca"  id="section6">
                    <div className="col-md-5 p-2">
                      <h1 className="m-3 div10h1" >Eligibility Criteria</h1>
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
                    <div class="col-md-5 p-3 px-5">
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
                {/* <!-- 10 div close -->   */}
                 {/* <!-- fee structure start 11 div --> */}
                 <div className="div11 mt-5" id="section7">
                <h1  className="mt-1 div11h3 ms-5">Fee Structure</h1>
                <hr></hr>
                <div class="row">
                    <div className="col-md-4 ">
                        <div className="p-2  mx-4 div11h2"><p class="p-4">24 Months EMI </p>
                        <h1 className="p-3 div11h1">rs.4,163</h1>
                    </div>
                    <p className="px-5 pt-3"><a href="#">Click to see  emi option</a></p>
                    </div>
                    <div className="col-md-4 ">
                        <div className="p-3 bg-light div11h">
                            <p className="p-4">per Semester Fee</p>
                            <h1 className="p-2 div11h1">rs.50,500</h1>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="p-2 bg-light div11h">
                        <p className="p-4">full Course Fee</p>
                        <h1 className="p-3 div11h1">rs.1,50,000</h1>
                      </div>  
                    </div>

                </div>
              </div>
                {/* <!-- 11th div close --> */}
                  {/* <!-- admission process 12 div --> */}
              <div className=" div12" >
                <div className="mt-5"><h1 className=" mx-5 text-primary div12h1 mt-3">Admission Process <hr></hr></h1></div>
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
              {/* <!-- career impact: 14 div --> */}
                   <div class="mt-5 bca14">

                    <h1 className='bca14h1' >Career impact :how we help you build Dream Career</h1>
                    <hr></hr>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="p-2 mentors">
                                <h1>o1.industry mentors</h1>
                            <p>Personalized guidance from Career experts throughout the </p>  
                           </div>
                        </div>
                        <div class="col-md-3">
                            <div  className='mentors'>
                            <h1>02. Virtual
                                Placement Drives</h1>
                                <p>Connect with employers and explore opportunities through interactive online events.</p>
                                </div>
                        </div>
                        <div class="col-md-3">
                            <div  className='mentors'>
                            <h1>03. Master
                                Classes</h1>
                                <p>Access comprehensive help for resume building, interview preparation and job placement.</p>
                        </div>
                        </div>
                        <div  class="col-md-3">
                        <div className='mentors'>
                            <h1>04.Prpfile building</h1>
                            <p>Build a Crediable professional profile by Showcasing your<br></br>Skills through hands-on projects. </p>
                        </div>
                    </div>

                  </div>
             </div>
            {/* <!-- 14 div close --> */}
            {/* <!-- potential job roles 15 div --> */}
               <div class="mt-5 bca15">
                <h1 class="mt-4 mx-4 job">Potential Job Roles</h1>
                <hr></hr>
                <div class="row">
                    <div class="col-md-4">
                        <div class="p-2 entry">
                            <h3 className='level'>ENTRY LEVEL</h3>
                    
                            
                             
                                <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" height="20" width="20"/>Junior Software Developer</p>
                               
                             <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>System Analyst</p>
                    
                             <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp"  width=" 20" height=" 20"/>Technical Support Engineer</p>
                             
                              <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp"  width=" 20" height=" 20"/>Web Developer</p>
                              <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp"  width=" 20" height=" 20" />Network Administrator</p>
  
  
  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-2 mid">
                            <h3 className='level'>MID LEVEL</h3>
                        
                            
                             <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/> Software Engineer</p>
                        
                              <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height="20" />Database Administrator</p>
                        
                              <p> <img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>IT Project Manager</p>
                        
                               <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>  IT Consultant</p>
                            
                                <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>Quality Assurance Analyst</p>
                                  
  
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="p-2 Adv">
                            <h3 className='level'>ADVANCED LEVEL</h3>
                            
                            
                              <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>Senior Solution Architectect</p>
                                
                              <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>IT director</p>
                        
                               <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>chief technology officer(CTO)</p>
                            
                               <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/>information system manager</p>
                    
                              <p><img src="C:\Users\payal\OneDrive\Pictures\doneIcon.webp" width=" 20" height=" 20"/> Chief information   Officer(cio)</p>
  
                        </div>
                    </div>
                </div>
  
  
            </div>
                {/* <!-- 15 div close --> */}
                {/* 16 div hiring partners */}
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
                 {/* 16div close */}
                 <Careerimpact/>
                 
               {/* <!-- are you ready to take the next step 18 div  --> */}
               <div class="row mt-5">
                    <div class="col-md-6 text-white div18" >
                        <h1>Are You Ready To Take The Next Step In Your Career ?</h1>
                    </div>
                    <div class="col-md-6">
                     <img src="./images/graduate.webp"class="img-fluid rounded "/>
                    </div>
                </div>

                {/* <!-- 18 div close --> */}  
                <br></br> 
                <br></br>
               <Showmore/>

      
         
       {/* close */}
       </div>
    )
} 
export default Bca;