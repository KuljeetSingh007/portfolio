import React from 'react';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar';
import MainContent from './pages/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;















// this below all code is my first day code on this app 
// // import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';
// import Propss from "./Page1"
// function App() {
// var [name,setname]=useState("Abi")
// var [email,setemail]=useState("Abi@gmail.com")
//   // this is component in component 
//   // we can use it only in this file not in any external file..
// function Change(){

    
//      setname('Devil')
//      setemail('Devil@gmail.com')

   

// }
// // function callme(){
// //   alert("Satt shiri akaal ji");
// // }

//   return (
//     <div className="App">
//       {/* <h2>{data}</h2> */}
     
//      {/* <Yeah/> */}
//      {/* <SayGoodbye /> */}
//     <button onClick={Change}>Click here</button>
//     <Propss name={name} email={email} />
//     <Propss name="abi" email="Abi@gmail.com" />
//     </div>
//   );
// }

// export default App;
