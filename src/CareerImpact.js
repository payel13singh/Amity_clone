// import './CareerImpact.css';
// function Careerimpact(){
//     return(
//         <div>
//             <h1>Career Impact: How We Help You Build Your Dream Career</h1>
//              <hr></hr>
//              <div className="row">
//                 <div className="col-md-3 ci">
//                  <img src="./bcaimages/01.png" height="100" width="100"/> 
//                  <h4>01.industry  Mentors</h4>
//                  <p>Personalized guidance from career experts throughout the academic journey.</p>
//                 </div>
//                 <div className="col-md-3 ci">
//                 <img src="./bcaimages/02.png" height="100" width="100" /> 
//                 <h4>01.Virtual Placement Drives</h4>
//                 <p>Connect with employers & explore opportunities through interactive online events.</p>
//                 </div>
//                 <div className="col-md-3 ci">
//                 <img src="./bcaimages/03.png"height="100" width="100"  /> 
//                 <h4>01.Master Class</h4>
//                 <p>Access comprehensive help for resume building, interview preparation and job placement.</p>
//                 </div>
//                 <div className="col-md-3 ci">
//                 <img src="./bcaimages/04.png" height="100" width="100" /> 
//                 <h4>01.Profile building</h4>
//                 <p>Build a credible professional profile by showcasing your skills through hands-on projects.</p>
//                 </div>
//              </div>
//         </div>
//     )
// }
// export default Careerimpact;


import './CareerImpact.css';
function Careerimpact() {
  return (
    <div className="container-fluid mt-4" id="section8">
      <h1 className='h11'>Career Impact: How We Help You Build Your Dream Career</h1>
      <hr />
      <div className="row">
      {/* <div className='p-1'> */}
        <div className="col-md-3 col-sm-6 ci bg-success">
            {/* <div className='p-1'> */}
          <img src="./bcaimages/01.png" height="100" width="100" alt="Industry Mentors" />
          <h4>01. Industry Mentors</h4>
          <p>Personalized guidance from career experts throughout the academic journey.</p>
          </div>
        {/* </div> */}
        {/* <div className='p-1'> */}
        <div className="col-md-3 col-sm-6 ci bg-success">
            {/* <div className='p-1'> */}
          <img src="./bcaimages/02.png" height="100" width="100" alt="Virtual Placement Drives" />
          <h4>02. Virtual Placement Drives</h4>
          <p>Connect with employers & explore opportunities through interactive online events.</p>
          {/* </div> */}
        </div>
        {/* <div className='p-1'> */}
        <div className="col-md-3 col-sm-6 ci bg-success">
            {/* <div className='p-1'> */}
          <img src="./bcaimages/03.png" height="100" width="100" alt="Master Class" />
          <h4>03. Master Class</h4>
          <p>Access comprehensive help for resume building, interview preparation and job placement.</p>
          </div>
        {/* </div> */}
        {/* <div className='p-1'> */}
        <div className="col-md-3 col-sm-6 ci bg-success">
            {/* <div className='p-1'> */}
          <img src="./bcaimages/04.png" height="100" width="100" alt="Profile Building" />
          <h4>04. Profile Building</h4>
          <p>Build a credible professional profile by showcasing your skills through hands-on projects.</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
export default Careerimpact;
