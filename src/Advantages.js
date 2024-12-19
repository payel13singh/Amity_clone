import Navbarindex from "./Navbarindex";
import './Advantages.css';
import { useEffect } from "react";
import Showmore from "./Showmore";
function Advantages(){
    useEffect(()=>{
    document.title="Advantages"
     },[])
               
    return(
        <div className="maind">
            <Navbarindex/>
                  {/* building start */}
             <div className=" building">
            <div className="row">
             <div className="col-md-4 bg-primary">
              <h2 className="mt-5">Power Your Career<br></br> Dreams With A<br></br> Top-Ranked University</h2>
            </div>
            <div className="col-md-8">
                <img src="./images/building.webp" className="img-fluid"/>
            </div>
        </div>     
        </div>
       {/* building close */}
       {/* 3rd div start */}
    
       <div className="maindiv p-4 row mt-4 ">
            <div class="col-md-2">
               <img src="./images/qs.webp" className="img-fluid"/>
            </div>
            <div className="col-md-3 mt-5">
                <h4>Online MBA Rankings 2023</h4>

                   <p> Global Top 50 | Asia Pacific Top 10</p>
            </div>
            <div className="col-md-1 mt-5">
                <p className="divp"></p>
            </div>
            <div className="col-md-6 mt-2">
               <h3> India’s Only Online MBA To Be Ranked By QS Globally</h3>

                <p>This Online MBA excels in affordability without compromising quality, offering top-tier education at exceptional value. Learners can expect a high return on investment, fueling unmatched professional growth.</p>
            </div>
           </div>
    {/* 3 rd div close */}
    {/* 4 th div start */}
    <br></br>
           <div className="row mt-5 fourthdiv ">
            <div className="col-md-7 fourthdiv1 ">
                <h2 className="mt-5 mx-5" >India’s Most Trusted Private <br></br>Education Brand</h2>
                <p className="mx-5 fourthdiv2"><i><u>Amity Online, with over 30 years of academic excellence,<br></br>
                     proudly secures a distinguished position globally for<br></br>
                      employability, acknowledged by Times Higher Education.<br></br>

                    This achievement sets it apart as one of the select seven<br></br>
                     institutes in India renowned for producing highly employable<br></br>
                      graduates.</u></i></p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 fourthdiv3">

               <h5 className="bg-primary text-white mt-5">Global employability Ackonowledged By</h5> 
               <div className="d-flex">
                
            
            
                <div>
                    <h2><font size="24px" color="blue">THE Times</font><br></br><h1 className="fourthdiv4">Higher<br></br>Education</h1></h2>
                </div>
               </div>
            </div>

           </div>
           {/* 4th div close */}
        {/* 5th div start */}
        <div className="mt-5 fifthdiv">
                <div className="d-flex">
                    <h1 className="mx-5 mt-5">Top-Notch Online Learner Experience</h1>
                     <p className="mt-5 fifthdiv1">Discover the pinnacle of online education <br></br>where excellence knows no boundaries</p>
                    </div>
                    <hr className="mt-5"></hr>
                    <br></br>
                    <div className="row m-5">
                        <div className="col-md-4">
                        
                            <div className="card  fifthdiv2">
                                <img className="card-img-top img-fluid divimg" src="./images/top international.webp" alt="card image"/>
                                <div className="card-body">
                                  <h4 className="card-title">Top International
                                    Faculty</h4>
                                  <p className="card-text text-white">Lectures delivered by top international faculty offer captivating insights with a global perspective</p>
                                
                                </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                    
                            <div className="card fifthdiv3 ">
                                <img className="card-img-top img-fluid divimg" src="./images/ai professor.webp" class="img-fluid" alt="card image" />
                                <div className="card-body">
                                  <h4 class="card-title">Ai-PROFESSOR AMI
                                </h4>
                                  <p class="card-text text-white">Diverse Learning options through recorded lectures, audio books, physical books, e-books & more</p>
                                
                                </div>
                              </div>
                        </div>
                        <div class="col-md-4">
                    
                            <div class="card  fifthdiv3">
                                <img className="card-img-top img-fluid divimg" src="./images/Diverse Learning.webp" alt="card image"  />
                                <div class="card-body">
                                  <h4 class="card-title">Diverse Learning
                                    Mediums</h4>
                                  <p class="card-text text-white">Diverse Learning options through recorded lectures, audio books, physical books, e-books & more</p>
                                
                                </div>
                              </div>
                        </div>
                    </div>
                    <div class="row mt-5 m-5">
                        <div class="col-md-4">
                        
                            <div class="card fifthdiv4 ">
                                <img className="card-img-top img-fluid div-img" src="./images/industry aligned.webp" alt="card image" />
                                <div class="card-body">
                                  <h4 class="card-title">Industry-Aligned
                                    Curriculums</h4>
                                  <p class="card-text text-white">HCL Tech and TCS ion aligned program curriculums with industry needs for better employability</p>
                                
                                </div>
                              </div>
                        </div>
                        <div class="col-md-4">
                    
                            <div class="card  fifthdiv5">
                                <img className="card-img-top img-fluid divimg" src="./images/interactive faculty.webp" alt="card image" />
                                <div class="card-body">
                                  <h4 class="card-title">Interactive Faculty
                                    Sessions
                                </h4>
                                  <p class="card-text text-white">Engage in a dynamic learning environment with our continuous faculty interaction and dedicated doubt-clearing sessions</p>
                                
                                </div>
                              </div>
                        </div>
                        <div class="col-md-4">
                    
                            <div class="card fifthdiv4 ">
                                <img className="card-img-top img-fluid divimg" src="./images/career services.webp" alt="card image" />
                                <div class="card-body">
                                  <h4 class="card-title">Career Services &
                                    Placement Assistance</h4>
                                  <p class="card-text text-white">Career services & placement assistance with 500+ hiring partners ensuring opportunities for professional growth</p>
                                
                                </div>
                              </div>
                        </div>
                    </div>
                    <div className="row mt-5 m-5">
                        <div className="col-md-4">
                        
                            <div className="card  fifthdiv22">
                                <img className="card-img-top img-fluid divimg" src="./images/remote protected.webp" alt="card image" />
                                <div className="card-body">
                                  <h4 className="card-title">Remote Proctored
                                    Exams</h4>
                                  <p className="card-text text-white">Experience hassle-free assessments with integrity and convenience, take tests from the comfort of own space</p>
                                
                                </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                    
                            <div className="card fifthdiv3 ">
                                <img className="card-img-top img-fluid divimg" src="./images/dedicated academic.webp" alt="card image" />
                                <div className="card-body">
                                  <h4 className="card-title">Dedicated Academic
                                    Advisor
                                </h4>
                                  <p className="card-text text-white">Access expert guidance from professionals who support from academic journey to the beginning of career</p>
                                
                                </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                    
                            <div className="card  fifthdiv3">
                                <img className="card-img-top img-fluid divimg" src="./images/industry mentorship.webp" alt="card image"  />
                                <div className="card-body">
                                  <h4 className="card-title">1:1 Industry
                                    Mentorship</h4>
                                  <p className="card-text text-white">Elevate your skills and career prospects with tailored insights, cultivating a pathway to professional success</p>
                                
                                </div>
                              </div>
                        </div>
                    </div>
                    </div>
        {/* 5th div close */}
        <hr className="mt-5"></hr>
        {/* 6div start */}
        <div className=" m-5 sixdiv">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="mx-4 mt-4">Live Campus Experience At All Our Campuses</h1>
                        </div>
                        <div className="col-md-4 mt-4">
                            <p>Immerse yourself in the energy of a lively campus atmosphere</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-7">
                            <img src="./images/5student.webp" height="700px" width="800px" class="mx-4 img-fluid" /> 
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h4 class="bg-success mt-5 mx-4">Campus orientation for
                                new learners</h4>
                                <h4 className="bg-success mt-5 mx-4" >Weekend classes</h4>
                                <h4 className="bg-success mt-5 mx-4">Last-minute revision sessions</h4>
                                <h4 className="bg-success mt-5 mx-4">Guest lecture series</h4>
                                <h4 className="bg-success mt-5 mx-4">Access to libraries and
                                    programming labs</h4>
                                    <h4 className="bg-success mt-5 mx-4">Exam preparation classes</h4>
                                    <h4 className="bg-success mt-5 mx-4">Access to campus events</h4>

                                    
                        </div>
                    </div>

                  </div>
        {/* 6div close */}
         {/* seven div start */}
                  <div className="mt-5">
                  <div className="sevendiv">
                    <h1 className="ms-5  campus">Campus Activity Highlights</h1>
                    <hr className="mt-4"></hr>
                
                    <div className="row mt-5">
                     <div className="col-md-6">
                        <img src="./images/a1.webp"className="img-fluid mt-4 mx-5 rounded-circle a1img" />
                     </div> 
                     <div class="col-md-6">
                        <img src="./images/a2.webp" className="img-fluid mt-4 mx-5  rounded-circle a2img" />
                     </div> 
         
                     </div> 
                     <div class="row">
                        <div class="col-md-4">
                            <img src="./images/a3.webp"className="img-fluid mt-4 mx-5  rounded-circle a3img" />
                     </div>
                        <div class="col-md-4">
                            <img src="./images/a4.webp"className="img-fluid mt-4 mx-5  rounded-circle a3img" />
                        </div> 
                        <div class="col-md-4">
                            <img src="./images/a5.webp"className="img-fluid mt-4 mx-5  rounded-circle a4img" />
                        </div> 
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <img src="./images/a6.webp"className="img-fluid mt-4 mx-5  rounded-circle a1img" />
                         
                            </div>
                            <div class="col-md-6">
                                <img src="./images/a7.webp"className="img-fluid mt-4 mx-5  rounded-circle a2img" />
                            </div> 
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="./images/a8.webp"className="img-fluid mt-4 mx-5  rounded-circle a3img" />
                              </div>
                                <div class="col-md-4">
                                    <img src="./images/a9.webp"className="img-fluid mt-4 mx-5  rounded-circle a3img" />
                                </div> 
                        
                                <div class="col-md-4">
                                    <img src="./images/a10.webp"className="img-fluid mt-4 mx-5  rounded-circle a4img" />
                                </div> 
                                </div>
                            </div>
                        </div>
        {/* seven div close  */}
        <br></br>
         {/* 8 div start  */}
         <div className="eightdiv ">
            <div className="row p-5">
                <div className="col md-8"><h1 className="chead">Top Recruiters</h1> </div>
                <div className="col md-4"><h6>These Are our trusted recruitment collaborators  for hiring students.</h6>    </div>
            </div>
        {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>

  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='row '>
      {/* <img src="./images/o1.webp" alt="Los Angeles" className="d-block crousal" /> */}
               <img src="./images/a.webp" className="mx-5 img-fluid crousal d-block"  />
               <img src="./images/b.webp" className="img-fluid mx-5 crousal d-block"  />
               <img src="./images/c.webp" className="img-fluid mx-5 crousal d-block"  />
               <img src="./images/quol.webp" className="img-fluid mx-5 crousal d-block"  />
               <img src="./images/tcs.webp" className="img-fluidb mx-5 crousal d-block" />
    </div>
    <div className='row pt-5'>
                   <img src="./images/c.webp" className="mx-5 img-fluid crousal d-block" />
                <img src="./images/g.webp" className="img-fluid mx-5 crousal d-block"  />
                <img src="./images/h.webp" className="img-fluid mx-5 crousal d-block"  />
                <img src="./images/gold.webp" className="img-fluid mx-5 crousal d-block"  />
                <img src="./images/adf.webp" className="img-fluid mx-5 crousal d-block"  />
    </div>
    </div>
    <div class="carousel-item">
      {/* <img src="./images/o2.webp" alt="Chicago" className="d-block crousal" /> */}
      <div className='row '>
      <img src="./images/a.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/b.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/c.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/hcl.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/walmart.webp"  className="mx-5 img-fluid crousal d-block" />

      </div>
      <div className='row pt-5'>
                 <img src="./images/c.webp" className="mx-5 img-fluid crousal d-block" />
                <img src="./images/g.webp"  className="mx-5 img-fluid crousal d-block" />
                <img src="./images/h.webp"  className="mx-5 img-fluid crousal d-block" />
                <img src="./images/acc.webp" className="mx-5 img-fluid crousal d-block" />
                <img src="./images/amazon.webp" className="mx-5 img-fluid crousal d-block" />
      </div>
    </div>
   
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    </button>
    </div>
    </div>





             {/* 8 div close */}
             <br></br>
             <br></br>
             <Showmore/>

           {/* close */}
       </div> 
    )
}
export default Advantages;