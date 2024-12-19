function Spynavbar(){
    return(
        <div>
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
            <a className="nav-link mx-4" href="#section1">OVERVIEW</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section2">PROGRAM HIGHLIGHTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section3">CURRICULUM</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section4">DEGREE OFFERED</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section6">ELIGIBILITY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section7">FEES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section8">CAREERS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#section9">FACULTY</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>


        </div>
    )
}
export default Spynavbar;