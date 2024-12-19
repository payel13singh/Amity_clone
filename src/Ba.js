import Careerimpact from "./CareerImpact";
import Navbarindex from "./Navbarindex";
import Showmore from "./Showmore";

function Ba(){
    return(
        <div className=" ">
          <Navbarindex/>
{/* <!-- 2nd div start --> */}
<div class="row mt-5">
        <div class="col-md-6">
            <h2 className="program" >UG PROGRAM</h2>
            <h1 className="text-primary mt-5">Bachlor Of Arts<br></br>
        <br></br>Duration 2 year</h1>
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

        </div>
        <div class="col-md-6">
         <img src="./bcaimages/bagirl.webp" class="img-fluid"/>
         {/* <img src={'./bcaimages/top indian.png'} /> */}
        </div>
    </div>
    {/* close */} 
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
            <h1 className="mx-4 mt-5">RS.2,750</h1>
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
            <h1 class="mx-4 mt-5">25-28</h1>
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
              <h1 className="mt-5 mx-5 build">3-yEar Degree To  Equip You With<br></br>Skills And Knowledge For An<br></br>Evolving Job Market</h1> 
              <p  className="mt-5 mx-5 bcap"><i>
              Our BA degree is a 3 years and 6 semesters program that will<br></br>
               equip you with skills and knowledge required in an evolving <br></br>
               job market. Acquire problem solving skills and expand your <br></br>
               career prospects among your peers.
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
          <div className="mba7 mt-5" id="section3">
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
            <div className='mt-5 mba9' id="section4" >
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
        <h5 className='mbah5'>1.Micro Economics I<br></br>
2.Fundamentals of Macro Economics I<br></br>
3.Economic History of India (1857 to 1947)<br></br>
4.Business Communication


<br></br>
<br></br>
1.History of English Literature<br></br>
2.Drama From Elizabethan to Restoration Age<br></br>
3.English Poetry From Chaucer to Blake<br></br>
4.Business Communication<br></br>


<br></br>
Political Science<br></br>
1.Nationalism in India<br></br>
2.Introduction to Politics I<br></br>
3.Political Science I (Political Theory)<br></br>
4.Indian Political Thought I<br></br>
5.Business Communication<br></br>


<br></br>
Sociology<br></br>
1.Indian Social Structure and Process<br></br>
2.Business Communication<br></br>
3.Sociology of Deviance<br></br>
4.Social Institutions<br></br>
5.Introduction to Sociology</h5>
        
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
          <h5 className='mbah5'>Economics<br></br>

Environmental Studies<br></br>
Statistical Methods in Economics I<br></br>
Micro Economics II<br></br>
Fundamentals of Macro Economics II<br></br>

<br></br>

English Poetry From Wordsworth to Tennyson<br></br>
20th Century Indian English Poetry<br></br>
20th Century Indian English Novel<br></br>
Environmental Studies<br></br>
<br></br>
Political Science<br></br>

Indian Political Thought II<br></br>
Political Science II<br></br>
Constitutional History of India<br></br>
Introduction to Politics II<br></br>
Environmental Studies<br></br>

<br></br>
Sociology<br></br>

Population and Society<br></br>
Classical Sociological Thinkers I<br></br>
Social Movements in India<br></br>
Environmental Studies<br></br>
Research Methods I<br></br>
Research Methods I</h5>
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
          <h5 className='mbah5'>Economics<br></br>

International Economics I<br></br>
Statistical Methods in Economics II<br></br>
Introduction to Demography<br></br>
Behavioural Science<br></br>

<br></br>
English<br></br>

Introduction to Literary Criticism<br></br>
English Novel<br></br>
Behavioral Sciences<br></br>
Creative Writing in English<br></br>

<br></br>
Political Science<br></br>

Public Administration I<br></br>
Comparative Government and Politics I<br></br>
Contemporary Diplomacy<br></br>
Behavioural Science<br></br>

<br></br>
Sociology<br></br>

Research Methods II<br></br>
Behavioural Science<br></br>
Kinship, Marriage and Fami</h5>
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
         <h5 className='mbah5'>Economics<br></br>

International Economics (Applied) II<br></br>
Fundamentals of Research Methodology in Economics<br></br>
Comparative Economic Development [1850 to 1950]<br></br>
Economic Environment for Business<br></br>
Industrial Economics

<br></br>
English<br></br>

Modern Drama<br></br>
Classical Indian Literature in Translation<br></br>
Introduction to Literary Theory<br></br>
Introduction to Sociolinguistics<br></br>
Literature and Secularism<br></br>

<br></br>
Political Science<br></br>

Comparative Government and Politics II<br></br>
Dynamics of Contemporary Global Concerns<br></br>
General Studies: India and The World<br></br>
Public Policy and Analysis<br></br>
Indian Government and Politics I<br></br>
Psephology and Data Analysis<br></br>

<br></br>
Sociology<br></br>

Political Sociology<br></br>
Sociology of Change and Development<br></br>
Sociology of Gender<br></br>
Urban Sociology<br></br>
Indian Social Thinkers</h5>
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
         <h5 className='mbah5'>Economics<br></br>

Economic Growth Models<br></br>
Regional Economics<br></br>
Basics of Health Economics<br></br>
Fundamentals of Behavioural Economics<br></br>
Labour Economics<br></br>
Fundamentals of Environmental Economics<br></br>

<br></br>
English<br></br>

History -an Introduction<br></br>
Modern English Poetry<br></br>
American Drama<br></br>
African Literature<br></br>
Professional Ethics<br></br>

Done
Political Science<br></br>

International Law<br></br>
Western Political Thought <br></br>
India's Foreign Policy I<br></br>
Indian Political System<br></br>
Constitution of India<br></br>


Sociology<br></br>

Sociology of Health<br></br>
Industrial Sociology<br></br>
Sociology of Aging<br></br>
Sociology and Law<br></br>
Globalization and Society<br></br>
Sociology of Marginalized Communities<br></br>
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
         <h5 className='mbah5'>Economics<br></br>

Fundamentals of Operation Research<br></br>
Major Project<br></br>
Application of Growth Models and Planning<br></br>
Economic System and Society<br></br>
Fundamentals of Money and Financial Markets<br></br>

<br></br>
English<br></br>

Modern English Novel<br></br>
Modern European Drama<br></br>
American Poetry<br></br>
Elementary Sociology I<br></br>
Dissertation<br></br>


Political Science<br></br>

India's Foreign Policy II<br></br>
Modern Government and Politics<br></br>
Legislative Support and Budget Analysis<br></br>
Major Project<br></br>
Western Political Thought II<br></br>


Sociology
<br></br>
History An Introduction<br></br>
Sociology of Religion<br></br>
Economic Sociology<br></br>
Environment Sociology<br></br>
Major Project<br></br>
</h5>
        </div>
      </div>
    </div>
  </div>
</div>
<div  className='col-md-6'>
                  <h5 className='degree'>ONLINE MBA DEGREE</h5>
                 <img src="./bcaimages/mbadegree.webp " className='img-fluid'/> 
                 <p className='mt'>Master Of Business Administration (MBA) online program created
                   by Amity Online provides a holistic view of business management 
                   that will not only cover modern tools and practices but will also
                    provide you with the ability to manage critical business decisions.</p>
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
                        <h1 className="p-3 div11h1">rs.2,750</h1>
                    </div>
                    <p className="px-5 pt-3"><a href="#">Click to see  emi option</a></p>
                    </div>
                    <div className="col-md-4 ">
                        <div className="p-3 bg-light div11h">
                            <p className="p-4">per Semester Fee</p>
                            <h1 className="p-2 div11h1">rs.16,000</h1>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="p-2 bg-light div11h">
                        <p className="p-4">full Course Fee</p>
                        <h1 className="p-3 div11h1">rs 99,000</h1>
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
                            <div class="p-2 div14m">
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
                <br></br>
      <Showmore/>
        </div>
    )
}
export default Ba;