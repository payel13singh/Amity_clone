
import { useState } from "react";
import './Showmore.css';
function Showmore() {
  // State to manage whether content is shown or hidden
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle the button click and toggle content
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      
      <div>
      {/* Button */}
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <button className="btn btn-primary" onClick={toggleContent}>
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>

      {/* Display Content */}
      {isExpanded && (
        <div className="row about" style={{ marginTop: "20px", fontSize: "18px" }}>
          <div className="col-md-4 ">
            
            <ul>
             <b> <p className="parali">CAREER SERVICES</p>
              <p className="parali">STUDENT STORIES</p>
              <p className="parali">LEADERSHIP</p>
              <p className="parali">CORPORATE</p>
              <p className="parali">CONTACT US</p>
              <p className="parali">T & C</p>
              <p className="parali">STUDENT SUPPORT</p>
              <p className="parali">INTELLECTUAL PROPERTIES</p>
              <p className="parali">UGC APPROVALS</p>
              <p className="parali">RESOURCES</p>
              <p className="parali">BLOG</p>
            <p className="parali">MEDIA</p></b>
            </ul>
            
          </div>
          <div className="col-md-4">
            <ul>
              <li>BACHELOR OF COMPUTER APPLICATION</li>
              <li>BCA WITH SPECIALIZATION IN CLOUD & SECURITY</li>
              <li>BCA WITH SPECIALIZATION IN DATA ANALYTICS</li>
              <li>BACHELOR OF BUSINESS ADMINISTRATION</li>
              <li>BACHELOR OF ARTS (JOURNALISM AND MASS COMMUNICATION)</li>
              <li>BACHELOR OF COMMERCE</li>
              <li>BACHELOR OF ARTS</li>
              <li>BACHELOR OF ARTS (KANNADA MEDIUM)</li>
              <li>BACHELOR OF ARTS (MALAYALAM MEDIUM)</li>
              <li>BACHELOR OF ARTS (TAMIL MEDIUM)</li>
              <li>BACHELOR OF ARTS (TELUGU MEDIUM)</li>
              <li>BACHELOR OF ARTS (HINDI MEDIUM)</li>
              <li>B.COM WITH SPECIALIZATION IN INTERNATIONAL FINANCE AND ACCOUNTING</li>
              <li>BACHELOR OF COMMERCE (HONOURS)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>MASTER OF COMPUTER APPLICATION</li>
              <li>MCA WITH SPECIALIZATION IN BLOCKCHAIN</li>
              <li>MCA WITH SPECIALIZATION IN ML & AI</li>
              <li>MCA WITH SPECIALIZATION IN MACHINE LEARNING</li>
              <li>MCA WITH SPECIALIZATION IN AR & VR</li>
              <li>MASTER OF BUSINESS ADMINISTRATION</li>
              <li>MCA WITH SPECIALIZATION IN DIGITAL MARKETING MANAGEMENT</li>
              <li>MCA WITH SPECIALIZATION IN HR ANALYTICS</li>
              <li>MCA WITH SPECIALIZATION IN DATA SCIENCE</li>
              <li>MCA WITH SPECIALIZATION IN BUSINESS ANALYTICS</li>
              <li>MCA WITH SPECIALIZATION IN DIGITAL ENTREPRENEURSHIP</li>
              <li>MASTER OF ARTS (JOURNALISM AND MASS COMMUNICATION)</li>
              <li>M.COM WITH SPECIALIZATION IN FINTECH</li>
              <li>M.COM WITH SPECIALIZATION IN FINANCIAL MANAGEMENT</li>
              <li>MASTER OF ARTS IN PUBLIC POLICY AND GOVERNANCE</li>
              <li>MASTER OF ARTS IN PSYCHOLOGY</li>
              <li>MASTER OF SCIENCE IN DATA SCIENCE</li>
            </ul>
          </div>
        </div>
      )}
      </div>
      <hr></hr>
        <div className="row">
            <div className="col-md-4">
                <img src="./images/amityu.svg" height="80" width=""/>
            </div>
            <div className=" col-md-4">
               <b><p>Toll Free numbers</p>
                <p>1800-102-3424</p>
                <p>Student Support Team</p>
                <p>91-88263-34455</p></b>
            </div>
            <div className="col-md-4">
            <b><p>Newletter</p>
            <p>Sign up to the latest updates</p>
            <p>Follow us:</p></b>
            {/* <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
          />
          <button className="btn btn-success" onClick={handleSubscribe}>
            Subscribe           </button> */}

            <div className="d-flex">
             <div>
             <a href="https://www.facebook.com/AmityOnlineUniversity/">
                <img src="./images/x.png"/>
                </a>
                </div>
             <div>
             <a href="https://www.youtube.com/AmityUniversityOnline">
                <img src="./images/c.svg"/>
                </a>
                </div>
             <div>
             <a href="https://in.linkedin.com/school/amityonline/">
                <img src="./images/f.svg"/>
                   </a>
                </div>
             <div>
             <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Famity_online">
                <img src="./images/in4.svg"/>
                </a>
                </div>
             <div>
             <a href="https://www.instagram.com/amityonline/">
                <img src="./images/youtube.svg"/>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Showmore;
   


//close//

// import { useState } from "react";
// import './Showmore.css';

// function Showmore() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [email, setEmail] = useState(""); // State to manage email input

//   const toggleContent = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleSubscribe = () => {
//     if (email) {
//       alert(`Subscribed successfully with email: ${email}`);
//       setEmail(""); // Clear the email input after subscribing
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

//   return (
//     <div className="container">
//       {/* Existing Show More/Less Content */}
//       <div>
//         <div className="row">
//           <div className="col-md-4"></div>
//           <div className="col-md-4 text-center">
//             <button className="btn btn-primary" onClick={toggleContent}>
//               {isExpanded ? "Show Less" : "Show More"}
//             </button>
//           </div>
//           <div className="col-md-4"></div>
//         </div>

//         {isExpanded && (
//           <div className="row about" style={{ marginTop: "20px", fontSize: "18px" }}>
//             {/* Your existing content here */}
//             {/* I am omitting the content for brevity */}
//           </div>
//         )}
//       </div>

//       {/* Subscribe Section */}
//       <hr />
//       <div className="row">
//         <div className="col-md-4">
//           <img src="./images/amityu.svg" height="80" width="" alt="Amity Logo" />
//         </div>
//         <div className="col-md-4">
//           <p>Toll-Free numbers</p>
//           <p>1800-102-3424</p>
//           <p>Student Support Team</p>
//           <p>91-88263-34455</p>
//         </div>
//         <div className="col-md-4">
//           <p>Newsletter</p>
//           <p>Sign up for the latest updates</p>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control mb-2"
//           />
//           <button className="btn btn-success" onClick={handleSubscribe}>
//             Subscribe
//           </button>

//           <p className="mt-3">Follow us:</p>
//           <div className="d-flex">
//             <div>
//               <a href="https://www.facebook.com/AmityOnlineUniversity/">
//                 <img src="./images/x.png" alt="Facebook" />
//               </a>
//             </div>
//             <div>
//               <a href="https://www.youtube.com/AmityUniversityOnline">
//                 <img src="./images/c.svg" alt="YouTube" />
//               </a>
//             </div>
//             <div>
//               <a href="https://in.linkedin.com/school/amityonline/">
//                 <img src="./images/f.svg" alt="LinkedIn" />
//               </a>
//             </div>
//             <div>
//               <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Famity_online">
//                 <img src="./images/in4.svg" alt="Twitter" />
//               </a>
//             </div>
//             <div>
//               <a href="https://www.instagram.com/amityonline/">
//                 <img src="./images/youtube.svg" alt="Instagram" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Showmore;



















