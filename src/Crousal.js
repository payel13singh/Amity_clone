import './Crousal.css';
function Crousal(){
    return(
    //     <div>
    //       <div className="mt-5 bg-light">
    //                 <div className="row">
    //                     <div className="col-md-8 mt-4"><h1 className="mx-4 chead">Top Recruiters</h1></div>
    //                     {/* <!-- <div class="col-md-2"></div> --> */}
    //                     <div className="col-md-4 mt-4"><p>These are our trusted recruitment<br></br> collaborators for hiring students</p></div>
    //                 </div>
    //                 <hr></hr>

    //            {/* Carousel  */}
    //          <div id="demo1" className="carousel slide" data-bs-ride="carousel">

    //  {/* Indicators/dots  */}
    // <div className="carousel-indicators">
    //   <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active"></button>
    //   <button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
    //   {/* <!-- <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button> --> */}
    // </div>
  
    //  {/* The slideshow/carousel  */}
    // <div className="carousel-inner">
    //   <div className="carousel-item active">
    //     {/* <!-- <img src="la.jpg" alt="Los Angeles" class="d-block w-100"> --> */}
    //     <div alt="Los Angeles" class="d-block w-100 img">
    //         <div className="bg-light">
    //            <img src="./images/a.webp" className="mx-5 img-fluid crousal"  />
    //            <img src="./images/b.webp" className="img-fluid mx-5 crousal"  />
    //            <img src="./images/c.webp" className="img-fluid mx-5 crousal"  />
    //            <img src="./images/quol.webp" className="img-fluid mx-5 crousal"  />
    //            <img src="./images/tcs.webp" className="img-fluidb mx-5 crousal" />
    //         </div>
    //         <div class="bg-light">
    //             <img src="./images/c.webp" className="mx-5 img-fluid crousal" />
    //             <img src="./images/g.webp" className="img-fluid mx-5 crousal"  />
    //             <img src="./images/h.webp" className="img-fluid mx-5 crousal"  />
    //             <img src="./images/gold.webp" className="img-fluid mx-5 crousal"  />
    //             <img src="./images/adf.webp" className="img-fluid mx-5 crousal"  />
    //         </div>
    //       </div>
    //   </div>
    //   <div class="carousel-item">
    //     {/* <!-- <img src="chicago.jpg" alt="Chicago" class="d-block w-100" /> --> */}
    //     <div alt="chicago" class="d-block w-100 img">
    //         <div class="bg-light">
    //            <img src="./images/a.webp"  className="mx-5 img-fluid crousal" />
    //            <img src="./images/b.webp"  className="mx-5 img-fluid crousal" />
    //            <img src="./images/c.webp"  className="mx-5 img-fluid crousal" />
    //            <img src="./images/hcl.webp"  className="mx-5 img-fluid crousal" />
    //            <img src="./images/walmart.webp"  className="mx-5 img-fluid crousal" />
    //         </div>
    //         <div class="bg-light">
    //             <img src="./images/c.webp"  className="mx-5 img-fluid crousal" />
    //             <img src="./images/g.webp"  className="mx-5 img-fluid crousal" />
    //             <img src="./images/h.webp"  className="mx-5 img-fluid crousal" />
    //             <img src=" ./images/acc.webp" className="mx-5 img-fluid crousal" />
    //             <img src=" ./images/amazon.webp" className="mx-5 img-fluid crousal" />
    //         </div>
    //       </div>
    //   </div>
    //   {/* <!-- <div class="carousel-item">
    //     <img src="ny.jpg" alt="New York" class="d-block w-100" />
    //   </div> --> */}
    // </div>
  
    // {/* Left and right controls/icons  */}
    // <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    //   <span className="carousel-control-prev-icon"></span>
    // </button>
    // <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    //     <span className="carousel-control-next-icon"></span>
    //   </button>
    //             </div>

    //             </div>
    //     </div>
    <div>
        {/* <!-- Carousel --> */}
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>

  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='row'>
      {/* <img src="./images/o1.webp" alt="Los Angeles" className="d-block crousal" /> */}
               <img src="./images/a.webp" className="mx-5 img-fluid crousal d-block"  />
               <img src="./images/b.webp" className="img-fluid mx-5 crousal d-block"  />
               <img src="./images/c.webp" className="img-fluid mx-5 crousal d-block"  />
               <img src="./images/quol.webp" className="img-fluid mx-5 crousal d-block"  />
               <img src="./images/tcs.webp" className="img-fluidb mx-5 crousal d-block" />
    </div>
    <div className='row'>
    <img src="./images/c.webp" className="mx-5 img-fluid crousal d-block" />
                <img src="./images/g.webp" className="img-fluid mx-5 crousal d-block"  />
                <img src="./images/h.webp" className="img-fluid mx-5 crousal d-block"  />
                <img src="./images/gold.webp" className="img-fluid mx-5 crousal d-block"  />
                <img src="./images/adf.webp" className="img-fluid mx-5 crousal d-block"  />
    </div>
    </div>
    <div class="carousel-item">
      {/* <img src="./images/o2.webp" alt="Chicago" className="d-block crousal" /> */}
      <div className='row'>
      <img src="./images/a.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/b.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/c.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/hcl.webp"  className="mx-5 img-fluid crousal d-block" />
               <img src="./images/walmart.webp"  className="mx-5 img-fluid crousal d-block" />

      </div>
      <div className='row'>
      <img src="./images/c.webp"  className="mx-5 img-fluid crousal d-block" />
                <img src="./images/g.webp"  className="mx-5 img-fluid crousal d-block" />
                <img src="./images/h.webp"  className="mx-5 img-fluid crousal d-block" />
                <img src=" ./images/acc.webp" className="mx-5 img-fluid crousal d-block" />
                <img src=" ./images/amazon.webp" className="mx-5 img-fluid crousal d-block" />
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
    )
}
export default Crousal;