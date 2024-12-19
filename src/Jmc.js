import Navbarindex from "./Navbarindex";
import Showmore from "./Showmore";

function Jmc(){
    return(
        <div className="">
          <Navbarindex/>
         <div class="row mt-5">
        <div class="col-md-6">
            <h2 className="program" >UG PROGRAM</h2>
            <h1 className="text-primary mt-5">Bachelor of commerce<br></br>(Online.com)
        <br></br>Duration 3 year</h1>

        </div>
        <div class="col-md-6">
         <img src="./bcaimages/jmc.webp" class="img-fluid"/>
      
          {/* <!-- 3rd div start --> */}
     <div className="row mt-5">
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
            <h1 className="mx-4 mt-5">RS.4,722</h1>
            <h1 className="mx-4">per month</h1>
            <h3 className="mx-4">starting EMI</h3>
            </div>
        </div>
        
        <div className="col-md-3">
            <div className="p-2 course ">
            <h1 className="mx-4 mt-5">126</h1>
            <h1 className="mx-4">course</h1>
            <h3 className="mx-4">Credits</h3>
            </div>
        </div>

        <div class="col-md-3">
            <div class="p-2 course29">
            <h1 class="mx-4 mt-5">28</h1>
             <h3 class="mx-4">Courses</h3>
            </div>
        </div>
     </div>
       {/* <!-- 3rd div close --> */}
        </div>
    </div>
    {/* start */}`              
      {/* <!-- 3rd div start --> */}
      <div className="row mt-5">
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
            <h1 className="mx-4 mt-5">RS.7,083</h1>
            <h1 className="mx-4">per month</h1>
            <h3 className="mx-4">starting EMI</h3>
            </div>
        </div>
        
        <div className="col-md-3">
            <div className="p-2 course ">
            <h1 className="mx-4 mt-5">103</h1>
            <h1 className="mx-4">course</h1>
            <h3 className="mx-4">Credits</h3>
            </div>
        </div>

        <div class="col-md-3">
            <div class="p-2 course29">
            <h1 class="mx-4 mt-5">19</h1>
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

{/* <!-- 4th div close --> */}
 {/* <!-- fifth div start --> */}
 <div className="row mt-5 bcamain" id="section1">
            <div className="col-md-7 bca5">
              <h1 className="mt-5 mx-5 build">Give a head start to your<br></br>career in media with India's<br></br>first UGC recognized online BAJMC</h1> 
              <p  className="mt-5 mx-5 bcap"><i>
              Our BA in Journalism and Mass Communication<br></br>
              program will help you gain essential skills in <br></br>
              writing, reporting, editing and multimedia production.<br></br>
              Learn from an international faculty online and <br></br>
              become media-savvy with critical thinking abilities.<br></br>
                
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
                    <div class="col-md-7 es"><h1>Program Highlights & Advantages</h1></div>
                    <div class="col-md-5"><p>Discover our online MBA degree program
                    and begin an exciting educational journey</p></div>
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./bcaimages/qs1.webp" class="img-fluid"/>
                            <h5>Qs Ranked online MBA</h5>
                            <p><i>Only Online MBA program in India to be ranked by QS. Ranked 7 in Asia Pacific.</i></p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./bcaimages/acca.webp" class="img-fluid"/>
                            <h5>ACCA specializations</h5>
                            <p><i>ACCA-accredited specializations offer exemptions from 60% of ACCA exams</i></p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-2 emerging">
                            <img src="./images/study.webp" class="img-fluid"/>
                            <h5>Study anytime anywhere</h5>
                            <p><i>400+ hours of recorded video lectures making your learning journey convenient</i></p>
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
             {/* 7div amity online advantage   */}
          <div className="mba7 mt-5">
            <h1 className='mbah1 p-4'>Amity Online Advantage : Why We re The Right Fit For You</h1>
            <hr></hr>
            <div className="row">
              <div className="col-md-3 p-3">
               <img src="./bcaimages/ad1.webp" className="img-fluid" height="40" width="40"/> 
               <h4>TOP INDIAN AND GLOBAL FACULTY</h4>
               <p>Get a world-class education from the faculty with rich academic and industry experience.</p>
              </div>
              <div className="col-md-3">
              <img src="./bcaimages/ad2.webp" className="img-fluid" height="40" width="40"/> 
              <h4> CAREER SERVICES FOR JOB READLINESS</h4>
              <p>Take master classes for interview preparation & resume building sessions while pursuing your degree.</p>
              </div>
              <div className="col-md-3">
              <img src="./bcaimages/ad3.webp" className="img-fluid" height="40" width="40"/> 
              <h4>CHOOSE SERVICES FOR JOB READINESS</h4>
              <p>Enhance your learning potential through your choice of printed books, audio books, e-books, videos, and campus library resources</p>
              </div>
              <div className="col-md-3">
              <img src="./bcaimages/ad4.webp" className="img-fluid" height="40" width="40"/> 
              <h4>CHOOSE THE WAY YOU WANT TO LEARN</h4>
              <p>Ensure a smooth job transition with placement opportunities from over 500+ hiring partners across domains.</p>
              </div>

            </div>
          </div>
          {/* close */}
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
              {/* 9 div program overview and structure */}
              <div className='mt-5 mba9' >
              <h1 className='mbah1'>PROGRAM OVERVIEW AND STRUCTURE</h1>
              <div className='row '>
                <div className='col-md-6 mt-5'>
                <div id="accordion">
    <div class="card">
      <div class="card-header">
        <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
        
       <h3>SEMESTER 1</h3>
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
        <h5 className='mbah5'>
   1.Mass Communication Models and Theory<br></br> 
    2.Print Journalism<br></br>
     3.Graphics and Visual Communication<br></br>
    4.Business Communication</h5>
        
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
       <h3>SEMESTER 2</h3>
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          <h5 className='mbah5'>1.Introduction to Radio and Audio Technique<br></br>
    
      2. Photography Theory and Practice<br></br>
       3.Media Ethics and Laws<br></br>
    
        4.Environmental Studies</h5>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
        <h3>  SEMESTER 3</h3>
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          <h5 className='mbah5'>
         1. Advertising Concepts<br></br>
          2. Introduction to Television Production<br></br>
           3. Introduction to Media Research<br></br>
             4. Global Media Scenario<br></br>
           5. Individual Excellence and Social Dynamic<br></br>


</h5>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsefour">
         <h3>SEMESTER 4</h3>
        </a>
      </div>
      <div id="collapsefour" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
         <h5 className='mbah5'>1.Online Journalism and Digital Media<br></br>
                  2.PR Concepts</h5>
                  3.Communication for Sustainable Development<br></br>
                  4.Principles of Marketing-1<br></br>
                  5.Writing For Specialism.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsefive">
         <h3>SEMESTER 5</h3>
        </a>
      </div>
      <div id="collapsefive" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
         <h5 className='mbah5'>1.Business Organisation<br></br>
            2.Fundamentals of Financial Management<br></br>
             3.Client Servicing and Creatives<br></br>
             4.Brand Management<br></br>
              5.Professional Ethics

</h5>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsesix">
         <h3>SEMESTER 6</h3>
        </a>
      </div>
      <div id="collapsesix" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
         <h5 className='mbah5'>1.Business Organisation<br></br>
            2.Fundamentals of Financial Management<br></br>
             3.Client Servicing and Creatives<br></br>
             4.Brand Management<br></br>
              5.Ad. Production and Campaign Planning

</h5>
        </div>
      </div>
    </div>
  </div>
</div>
<div  className='col-md-6'>
                  <h5 className='degree'>ONLINE MBA DEGREE</h5>
                 <img src="./bcaimages/bjmc.webp " className='img-fluid'/> 
                 <p className='mt'>Bachelor of Commerce (B.Com) is a 3-years (6 semesters)
                     undergraduate program designed to develop business acumen, financial
                      literacy, and analytical skills of the learners.</p>
                </div>
                </div>
          
      </div>
                {/* </div> */}
                  {/* <!-- Eligibility criteria 10 div start --> */}
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
                      width= "20" height= "20" />A Certificate of equivalence from the Association of Indian Universities required from students with foreign education to apply to any university in India. (refer to https://aiu.ac.in/)</p>
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
                        <h1 className="p-3 div11h1">rs.4,083</h1>
                    </div>
                    <p className="px-5 pt-3"><a href="#">Click to see  emi option</a></p>
                    </div>
                
                    <div className="col-md-4 ">
                        <div className="p-3 bg-light div11h">
                            <p className="p-4">per Semester Fee</p>
                            <h1 className="p-2 div11h1">rs.29,000</h1>
                        </div>
                    </div>
                
                    <div className="col-md-4 ">
                      <div className="p-2 bg-light div11h">
                        <p className="p-4">full Course Fee</p>
                        <h1 className="p-3 div11h1">rs.1,70,000</h1>
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
                {/* 13 journey Towards */}
                <div className='jurney mt-5'>
                <h2 className='jo'>JOURNEY TOWARDS :ONLINE DEGREE PROGRAM</h2>
                <div className='row'>
                  {/* <div className='col-md-6'> */}
                  <div className='col-md-6 mt-5'>
                <div id="accordion">
    <div class="card">
      <div class="card-header">
        <a class="btn" data-bs-toggle="collapse" href="#collapsea">
        
       <h3>ONLINE ORIENTATION</h3>
        </a>
      </div>
      <div id="collapsea" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
        <h5 className='mbah5'>Attend orientation sessions to familiarize yourself with the program, university policies, and resources.</h5>
        
        </div>
      </div>
    </div>
    <br></br>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseb">
       <h3>ON-CAMPUS MEET</h3>
      </a>
      </div>
      <div id="collapseb" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          <h5 className='mbah5'>Meet your peers and faculty at an on-campus event.</h5>
        </div>
      </div>
    </div>
    <br></br>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsec">
        <h3> ACADEMIC PROGRESS</h3>
        </a>
      </div>
      <div id="collapsec" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          <h5 className='mbah5'>Attend live and recorded classes, complete your assignments, and maintain a strong academic performance.</h5>
        </div>
      </div>
    </div>
    <br></br>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsed">
         <h3>UTILIZE RESOURCES</h3>
        </a>
      </div>
      <div id="collapsed" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
         <h5 className='mbah5'>Avail library resources at the Noida campus, online learning resources, and academic support services to enhance your learning.</h5>
        </div>
      </div>
    </div>
   
  </div>
</div>
                  {/* </div> */}
                  <div className='col-md-6 mt-3'>
                    <img src="./bcaimages/green shirt.webp" className='img-fluid'/>
                  </div>
                </div>
              </div>
              {/* 13 close */}
               {/* <!-- potential  job roles 14 div --> */}
               <div className="mt-5 div14" >
                    <h1 className="mt-4 mx-4 div14h1">Potential Job Roles</h1>
                    <hr></hr>
                    <div className="row">
                        <div className= "col-md-4">
                        <div className="p-2 div14m">
                                <h3 className="div14h3">ENTRY LEVEL</h3>
                                <p><img src="./images/doneIcon.webp"width="20" height="20 "/> JUNIOR SOFTWARE DEVLOPER</p>
                                
                                   <p><img src="./images/doneIcon.webp"width="20" height="20" />SYSTEM ANALYST</p>
                                
                                    <p><img src="./images/doneIcon.webp"width="20" height="20"/>TECHNICAL SUPPORT ENGINEER</p>
                                   
                                     <p><img src="./images/doneIcon.webp"width="20" height="20"/>WEB DEVLOPER</p>
                        
                                     <p><img src="./images/doneIcon.webp"width="20" height="20"/>NETWORK ADMINISTRATION</p>
                                
                                     <p><img src="./images/doneIcon.webp"width="20" height="20"/>Human Resource Executive</p>



                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-2 div14m">
                                <h3 className="div14h3">MID LEVEL</h3>
                                <p>Marketing Manager</p>
                                
                                 <p><img src="./images/doneIcon.webp"width="20" height="20"/>SOFTWARE ENGINERR</p>
                            
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>DATABASE ADMINISTRATIOR</p>
                            
                                  <p> <img src="./images/doneIcon.webp"width="20" height="20"/>IT PROJECT Manager</p>
                            
                                   <p><img src="./images/doneIcon.webp"width="20" height="20"/>IT CONSULTANT</p>
                                
                                    <p><img src="./images/doneIcon.webp"width="20" height="20"/>QUALITY ASSURANCES ANALYST</p>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-2 div14m">
                                <h3 className="div14h3 ">ADVANCED LEVEL</h3>
                                <p><img src=""/>Director of Operations</p>
                                
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>Chief TECHNOLOGY Officer (CTO)</p>
                                    
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/> IT DIRECTOR</p>
                            
                                   <p><img src="./images/doneIcon.webp"width="20" height="20"/>INFORMATION SYSTEMS MANAGER</p>
                                
                                   <p><img src="./images/doneIcon.webp"width="20" height="20"/>CHIEF INFORMATION OFFICER(CIO)</p>
                        
                                  <p><img src="./images/doneIcon.webp"width="20" height="20"/>Chief EXCUTIVE  Officer</p>

                            </div>
                        </div>
                    </div>


                </div>
                {/* <!-- 14 div close --> */}
                <br></br>
                <br></br>
                 <Showmore/>
            
              </div>   
        // </div>
    )
}
export default Jmc;