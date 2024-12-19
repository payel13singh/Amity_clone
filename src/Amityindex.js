import Navbarindex from "./Navbarindex";
import './Amityindex.css';
function Amityindex()
{
    return(
      <div>
        <Navbarindex/>
       <div className="p-5">
    <div className="row mt-5">
        <div className="col-md-3">
            <div className="p-5 bg-warning ">
               <h1>30+</h1>
               <h6>years of excellence</h6>
            </div>
        </div>
        <div className="col-md-3">
            <div className="p-5 bg-success">
              <h1>500+</h1>
              <h6>Hiring Partners</h6>
            </div>
        </div>
        <div className="col-md-3">
            <div className="p-5 bg-primary">
              <h1>89K+</h1>
              <h6>Learners</h6>
            </div>
        </div>
        <div className="col-md-3">
            <div className="p-5 bg-danger">
              <h1>60+</h1>
              <h6>Programs & Specialiations</h6>
            </div>
        </div>
      </div>
</div>
{/* second div close */}
{/* third div start */}
<div className="m-5 slide">
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>

  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div className="carousel-item active p-5">
        <div className="row">
      <div className="col md-4 d-flex">      
      <img src="./images/ac1.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">india s only MBA ranked by qs Asia pacific Top 10 </p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac2.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">First University in India to recive UGC Approval For online Degrees and Learning program</p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac3.webp" alt="Los Angeles" className="d-block show"  />
      <p className="pt-5 para1">WES  accerited in canada</p>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col md-4 d-flex"> 
      <img src="./images/ac4.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">Ranked 35 by national instituional Ranking Framework </p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac5.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">Degree Programs Approved by all india council of technical Education. </p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac6.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">India s first Private University to be a member </p>
      </div>
    </div>

    </div>
    <div className="carousel-item active p-5">
        <div className="row">
      <div className="col md-4 d-flex">      
      <img src="./images/ac2.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">The Western Association of schools and colleges.</p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac3.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">First University in India to recive UGC Approval For online Degrees and Learning program</p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac7.webp" alt="Los Angeles" className="d-block show"  />
      <p className="pt-5 para1">WES  accerited in canada</p>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col md-4 d-flex"> 
      <img src="./images/ac5.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">Ranked 35 by national instituional Ranking Framework </p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac6.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">Degree Programs Approved by all india council of technical Education. </p>
      </div>
      <div className="col md-4 d-flex">
      <img src="./images/ac8.webp" alt="Los Angeles" className="d-block show "  />
      <p className="pt-5 para1">India s first Private University to be a member </p>
      </div>
    </div>

    </div>
   
</div>
      </div>
      </div>
      {/* close */}
      {/* why choose amity online */}
      <div className="m-5 wchoose">
        <div className="row p-5">
          <div className="col md-8">
            <h1 className="main head">WHY CHOOSE AMITY ONLINE</h1>
          </div>
          <div className="col md-4">
            <h6>Be ahead with industry First Advantages </h6>
          </div>
          <hr></hr>
          <div>
            <div className="row p-5">
                  <div className="col md-3">
                    <img src="./images/w1.webp"  className="wimage"/>
                    <h4 className="head4">DIVERSE LEARNING MEDIUMS</h4>
                    <p><i>E-books printed & audio videos  to create your preference & unique learning style.</i> </p>
                  </div>
                  <div className="col md-3">
                  <img src="./images/w2.webp"  className="wimage"/>
                  <h4 className="head4">DEDICATED ACADEMIC ADVISIOR</h4>
                  <p><i>Dedicated and experts and advisior to guide you at every steps of your professional  career.</i> </p>
                  </div>
                  <div className="col md-3">
                  <img src="./images/w3.webp"  className="wimage"/>
                  <h4 className="head4">AI PROFESSOR AMI</h4>
                  <p><i>powered by CHT-GPT 4 and open AI -driven technology for online learning.</i></p>
                  </div>
                  <div className="col md-3">
                  <img src="./images/w4.webp"  className="wimage"/>
                  <h4 className="head4">CAREER SERVICES</h4>
                  <p><i>Be job ready with resume building workshops, internship & industry mentorship.</i></p>
                  </div>
            </div>
            <div className="row p-5">
            <div className="col md-3">
                    <img src="./images/w5.webp"  className="wimage"/>
                    <h4 className="head4">DOORSTEP DELIVERY  OF BOOKS</h4>
                    <p><i>india s only University to provide physical books to read at your door step</i></p>
                  </div>
                  <div className="col md-3">
                  <img src="./images/w6.webp"  className="wimage"/>
                  <h4 className="head4">METAVERSE CAMPUS</h4>
                  <p><i>discovering endless possibilities of amity campus through our metaverse tour Experience.</i></p>
                  </div>
                  <div className="col md-3">
                  <img src="./images/w7.webp" className="wimage"/>
                  <h4 className="head4">OFLINE EXPERIENCE</h4>
                  <p><i>weave  a close bond with faculty & peers</i>  </p>
                  </div>
                  <div className="col md-3">
                  <img src="./images/w8.webp" className="wimage"/>
                  <h4 className="head4">PLACEMENT OPPORTUNITIES</h4>
                  <p><i>job interview prepation placement opportunities assistanceand resume building for students to be job ready.</i></p>
                  </div>
            </div>
          </div>
        </div>
      </div>
      {/* close */}
      {/* frequently asked question */}
      <div className="m-5">
      <div id="accordion">
      <div className="card">
              <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                   <h4 className="freq"> What Is The Admission Process Of Amity Online?</h4>
                </a>
              </div>
              <div id="collapseOne" class="collapse " data-bs-parent="#accordion">
                <div className="card-body bg-dark text-white">
                    <p>The admission process for Amity Online involves selecting your preferred course, submitting the online application form along with necessary documents, and, u.</p>
                </div>
              </div>
            </div>
    {/* close */}
    <div className="card">
              <div className="card-header">
                <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                    <h4 className="freq">How Do I Access My Course?</h4>
              </a>
              </div>
              <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                <div className="card-body bg-dark text-white">
                    <i>After receiving login credentials of LMS, enrolled students can start with the program. All the course related information is structured in LMS through which.</i>
                </div>
              </div>
            </div>
            {/* 3rd question */}
            <div className="card">
              <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                   <h4 className="freq"> Where I Can See The Academic Calendar For My Degree Program?</h4>
                </a>
            </div>
            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
              <div className="card-body bg-dark text-white">
              <p> Students can see their academic calendar in the student zone accessible through the LMS.</p>
              </div>
            </div>
          </div>
          {/* 4th question */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsefour">
               <h4 className="freq">How Will I Get Admission Confirmation?</h4>
              </a>
          </div>
          <div id="collapsefour" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
                Once your admission process is completed and enrollment number is generated, our support team will get in touch with you for admission confiration.
            </div>
          </div>
        </div>
          {/* 5th ques */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsefive">
               <h4 className="freq">What Kind Of Study Material Is Given?</h4>
              </a>
          </div>
          <div id="collapsefive" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
                Semester wise videos are available in student zone and program books are also couriered at registered address. 
            </div>
          </div>
        </div>
          {/* 6th ques */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsesix">
               <h4 className="freq">Where Do I Get The Assignments?</h4>
             </a>
          </div>
          <div id="collapsesix" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
        You can get the assignments in student zone.
            </div>
          </div>
        </div>
          {/* 7th question */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseseven">
               <h4 className="freq"> When Does The Admission Start In Amity University Online For All Programs?</h4>
                 
              </a>
          </div>
          <div id="collapseseven" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
        
                
                There are two sessions, one starts from 1st January to April and second starts from 1st July to September. 
            </div>
          </div>
        </div>

          {/* 8th ques */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseeight">
               <h4 className="freq"> Cancellation Of Admission?</h4>
                
            
              </a>
          </div>
          <div id="collapseeight" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            Cancellation of admission will be granted on the special approval from competent authority on case to case basis
            </div>
          </div>
        </div>

          {/* 9th ques */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsenine">
               <h4 className="freq"> How To Obtain The Admission Letter?</h4>
                </a>
          </div>
          <div id="collapsenine" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            
                
                Once the enrollment number is generated, an e-mail will be sent to the learner with login details. This mail can be considered as admission letter.
            </div>
          </div>
        </div>
          {/* 10th ques */}
          <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseten">
               <h4 className="freq"> What Is Amity University Online?</h4>
                </a>
          </div>
          <div id="collapseten" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            
                
                Amity University Online is the online learning platform of Amity University, one of India's leading private universities. It
                offers a wide range of undergraduate, postgraduate, and diploma programs across various disciplines, delivered
                entirely online.
            </div>
          </div>
        </div>
          {/* 11th ques */}
          <div class="card">
            <div class="card-header">
              <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseeleven">
               <h4 className="freq">How Does Online Learning With Amity University Online Work?</h4>
         </a>
          </div>
          <div id="collapseeleven" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
         Our online learning platform provides students with access to course materials, lectures, assignments, and
           discussions through an intuitive and user-friendly interface. Students can engage with their studies at their own
                pace and convenience, accessing resources from anywhere with an internet connection.
            </div>
          </div>
        </div>
        {/* 12th quse */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse10">
               <h4 className="freq">What Is Amity University Online?</h4>
                </a>
          </div>
          <div id="collapse10" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            
                
                Amity University Online is the online learning platform of Amity University, one of India's leading private universities. It
                offers a wide range of undergraduate, postgraduate, and diploma programs across various disciplines, delivered
                entirely online.
            </div>
          </div>
        </div>
        {/* 13 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse11">
               <h4 className="freq">How Does Online Learning With Amity University Online Work?</h4>
         </a>
          </div>
          <div id="collapse11" className="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
         Our online learning platform provides students with access to course materials, lectures, assignments, and
           discussions through an intuitive and user-friendly interface. Students can engage with their studies at their own
                pace and convenience, accessing resources from anywhere with an internet connection.
            </div>
          </div>
        </div>
        {/* 14 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsetwelve">
               <h4 className="freq">Are The Programs Offered By Amity University Online Accredited?</h4>
    
         </a>
          </div>
          <div id="collapsetwelve" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
                Yes, all programs offered by Amity University Online are accredited by the relevant accreditation bodies. Our online
                degree programs are recognized and respected by employers and institutions worldwide.
            </div>
          </div>
        </div>
        {/* 15 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse12">
               <h4 className="freq"> What Are The Admission Requirements For Amity University Online Programs?</h4>
    
         </a>
          </div>
          <div id="collapse12" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            Admission requirements vary depending on the program and level of study. Generally, applicants are required to meet
            certain academic qualifications and need to submit documents such as transcripts, national identity cards.
            </div>
          </div>
        </div>
        {/* 16 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse13">
               <h4 className="freq"> How Are Online Classes Conducted? </h4>
    
         </a>
          </div>
          <div id="collapse13" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            Online classes are conducted through live lectures, pre-recorded videos, interactive discussions, and virtual
                classrooms. Students can participate in real-time or access recordings later, providing flexibility to accommodate
                various schedules and time zones.
            </div>
          </div>
        </div>
 {/* 17 ques */}
 <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse14">
               <h4 className="freq">Can I Interact With Faculty And Classmates In An Online Program? </h4>
    
         </a>
          </div>
          <div id="collapse14" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            Yes, our online programs encourage interaction and collaboration among students and faculty. You can engage in
                discussions, ask questions, and seek guidance from instructors and classmates through various online communication channels. 
            </div>
          </div>
        </div>
        {/* 18 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse16">
               <h4 className="freq"> What Academic Support Services Are Available To Online Students? </h4>
    
         </a>
          </div>
          <div id="collapse16" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            Amity University Online offers a range of academic support services to help students succeed, including academic
            advising and technical support.
            </div>
          </div>
        </div>
        {/* 19 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseseventeen">
               <h4 className="freq"> How Are Exams And Assessments Conducted In Online Programs?</h4>
    
              </a>
          </div>
          <div id="collapseseventeen" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
        
                Assessments may vary depending on the course but typically include a combination of quizzes, assignments, and
                projects. Exams are conducted through a remote online proctoring system and can be taken from anywhere.
            </div>
          </div>
        </div>
        {/* 20 ques */}
        <div className="card">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse20">
               <h4 className="freq">Can I Transfer Credits Earned From Other Institutions To Amity University Online Programs? </h4>
    
              </a>
          </div>
          <div id="collapse20" class="collapse" data-bs-parent="#accordion">
            <div className="card-body bg-dark text-white">
            Yes, we accept transfer credits from accredited institutions, subject to evaluation and approval by our admissions
            team.
              
            </div>
          </div>
        </div>
       

          
      
      
 
</div>
</div>
</div>
    
    )
}
export default Amityindex;