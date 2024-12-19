import logo from './logo.svg';
// import './App.css';
// import Amityindex from './Navbarindex';
import Navbarindex from './Navbarindex';
import Career from './Career';
import Advantages from './Advantages';
import { Route, Routes } from 'react-router-dom';
import Amityindex from './Amityindex';
import Crousal from './Crousal';
import Studentlogin from './Studentlogin';
import Programnav from './Programnav.js';
// import Enrollnow from './Enrollnow';
import Bba from './Bba.js';
import Bca from './Bca.js';
import Mba from './Mba.js';
import Mca from './Mca.js';
import Bcom from './Bcom.js';
import Ba from './Ba.js';
import Bajmc from './Bajmc.js';
import Mcom from './Mcom.js';
import Navbar from './Navbar.js';

import Jmc from './Jmc.js';
import Moa10 from './Moa10.js';
import Showmore from './Showmore.js';
import Enrollnow2 from './Enrollnow2.js';
import Call from './Call.js';
import Applynow from './Applynow.js';
// import Try from './Try.js';
import Careerimpact from './CareerImpact.js';
import Spynavbar from './Spynavbar.js';



function App() {
  return (
    <div className="App">

<Routes>
      <Route path='/' element={<Amityindex />} />
      <Route path='/career' element={<Career />} />
      <Route path='/adv' element={<Advantages />} />
      <Route path='/cro' element={<Crousal />} />
      <Route path='/test' element={<Programnav />} />
      <Route path='/callus' element={<Call/>} />
      <Route path='/studentLogin' element={<Studentlogin />} />
    
      <Route path='/enrollnow2' element={ <Enrollnow2 />}    />
      <Route path='/applynow' element={< Applynow/>} />
      <Route path='/Bba' element={<Bba/>} />
      <Route path='/mba' element={<Mba/>} />
      <Route path='/bca' element={<Bca/>} />
      <Route path='/mca' element={<Mca/>} />
      <Route path='/b.com' element={< Bcom/>} />
      <Route path='/ba' element={< Ba/>} />
      <Route path='/bajmc' element={< Bajmc/>} />
      <Route path='/mcom.fm' element={< Mcom/>} />
      <Route path='/moa10.fm' element={< Moa10/>} />
      {/* <Route path='/moa10.fm' element={< Moa10/>} /> */}
       </Routes> 

  
      {/* <Navbarindex/> */}
      {/* <Career/> */}
      {/* <Advantages/> */}
      {/* <Amityindex/>/ */}
      {/* <Crousal/> */}
      {/* <Studentlogin/> */}
      {/* <Programnav/> */}
      {/* <Studentlogin/> */}
      {/* <Inroll/> */}
      {/* <Enrollnow/> */}
      {/* <Bba/> */}
      {/* <Bca/> */}
      {/* <Mba/> */}
    {/* <Mca/> */}
    {/* <Bcom/> */}
    {/* <Ba/> */}
    {/* <Bajmc/> */}
    {/* <Mcom/> */}
    {/* <Navbar/> */}
  
    {/* <Jmc/> */}
    {/* <Moa10/> */}
    {/* <Showmore/> */}
    {/* <Enrollnow2/> */}
    {/* <Call/> */}
    {/* <Applynow/> */}
    {/* <Try/> */}
    {/* <Careerimpact/> */}
    {/* <Spynavbar/> */}
    
      

    

    </div>
  );
}

export default App;
