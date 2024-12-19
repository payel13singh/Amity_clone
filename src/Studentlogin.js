import './Studentlogin.css';
function Studentlogin()
{
    return(
        <div>

        {/* // <!-- Button to Open the Modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
    Open modal
  </button>
  {/* <!-- The Modal --> */}
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
  
    )
}
export default Studentlogin;