

import React from "react";

function Applynow() {
  return (
    <div>
      <div className="container mt-3">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#applyModal" 
        >
          {/* Apply Now */}
        </button>
      </div>

      {/* The Modal */}
      <div className="modal fade" id="applyModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
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

            {/* Modal Body */}
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

            {/* Modal Footer */}
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
    </div>
  );
}

export default Applynow;




// function Applynow()
// {
//     return(
//         <div>

//         {/* // <!-- Button to Open the Modal --> */}
//         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalapply">
//     Open modal
//   </button>
//   {/* <!-- The Modal --> */}
// <div className="modal" id="myModal">
//   <div className="modal-dialog">
//     <div className="modal-content">

//       {/* <!-- Modal Header --> */}
//       <div className="modal-header">
//         <h4 className="modal-title">Modal Heading</h4>
//         {/* <h1>nisha</h1> */}
//         <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//       </div>

//       {/* <!-- Modal body --> */}
//       <div className="modal-body">
//         <div className="row">
//           <div className="col md-6">
//             <img src="./images/applynow.jfif"height="520" width="420"/>?
//             {/* <img src="./images/Applynow.jfif"
//                     alt="Apply Now"
//                     className="img-fluid"
// //                   /> */}
//           </div>
//           <div className="col md-6">
//             <div className='m-5'>
//             <h1><i><u>Student Login</u></i></h1>
//             <p><i><u>Enter your details here to login to your account</u></i></p>
//             <div class="row">
//       <div className="col">
//         <input type="text" className="form-control" placeholder="login email" name="email" />
//       </div>
//       <div className="col">
//         <input type="password" className="form-control" placeholder="login password" name="pswd" />
//       </div>
//     </div>
//     <p><i>email-id/form id*</i></p>
//     <div className="row">
//         <input type="text" className="form-control inputbox" placeholder="Enter email" name="email" />
//       </div>
//       <p><i><u>password*</u></i></p>
//     <div className="row">
//         <input type="text" className="form-control inputbox" placeholder="Enter password" name="email" />
//       </div>
//       <p><i><u>Forgot password</u></i></p>
//       <div className="row">
//         <input type="text" className="form-control inputbox" placeholder="submit" name="email" />
//       </div>
//       </div>


//           </div>
//         </div>
//       </div>

//       {/* <!-- Modal footer --> */}
//       <div className="modal-footer">
//         <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>

//     </div>
//   </div>
// </div>
        
//     </div>
  
//     )
// }
// export default Applynow;


// function Applynow() {
//   return (
//     <div>
//       {/* Button to Open the Modal */}
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#Modalapply"
//       >
//         Open modal
//       </button>

//       {/* Apply Now Button */}
//       <button
//         type="button"
//         className="btn btn-success ms-2 mt-2"
//         data-bs-toggle="modal"
//         data-bs-target="#Modalapply"
//       >
//         APPLY NOW
//       </button>

//       {/* The Modal */}
//       <div className="modal" id="Modalapply">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             {/* Modal Header */}
//             <div className="modal-header">
//               <h4 className="modal-title">Modal Heading</h4>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>

//             {/* Modal Body */}
//             <div className="modal-body">
//               <div className="row">
//                 <div className="col-md-6">
//                   <img src="./images/applynow.jfif" height="520" width="420" alt="Apply Now" />
//                 </div>
//                 <div className="col-md-6">
//                   <div className="m-5">
//                     <h1><i><u>Student Login</u></i></h1>
//                     <p><i><u>Enter your details here to login to your account</u></i></p>

//                     <div className="row">
//                       <div className="col">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="login email"
//                           name="email"
//                         />
//                       </div>
//                       <div className="col">
//                         <input
//                           type="password"
//                           className="form-control"
//                           placeholder="login password"
//                           name="pswd"
//                         />
//                       </div>
//                     </div>
//                     <p><i>email-id/form id*</i></p>
//                     <div className="row">
//                       <input
//                         type="text"
//                         className="form-control inputbox"
//                         placeholder="Enter email"
//                         name="email"
//                       />
//                     </div>
//                     <p><i><u>password*</u></i></p>
//                     <div className="row">
//                       <input
//                         type="password"
//                         className="form-control inputbox"
//                         placeholder="Enter password"
//                         name="pswd"
//                       />
//                     </div>
//                     <p><i><u>Forgot password</u></i></p>
//                     <div className="row">
//                       <button className="btn btn-primary">Submit</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Applynow;

