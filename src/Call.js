function Call(){
    return(
        <div>
           <div class="container mt-3">
  
  
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        {/* <h4 class="modal-title">Modal Heading</h4> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      {/* <div class="modal-body">
        Modal body..
      </div> */}
    
    
        <div>
    
    
            <img src="./images/callgirl1.jpeg"/>
        </div>
      


      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>



 

        </div>
    )
}
export default Call;