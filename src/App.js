import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { useState } from 'react';


//const Blob = () => {
  //const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /*window.onpointermove = event => { 
    const blob = document.getElementById("blob");
    const { clientX, clientY } = event;
    setMousePosition ({x : clientX, y : clientY});

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });
  }*/

 /* return (
    <div id="blob"/>
  );
};

*/

function App() {
  return (
  
    <div className="flex justify-between w-screen h-screen overflow-y-auto selection:bg-[#64ffda] selection:text-teal-900 bg-slate-900">
     
      <div className="w-1/2 h-full">
          <Header />
      </div>
     

      <div className="w-1/2 h-full flex justify-center items-center ">
        {/* Content of the scrollable part */}
        <Main />
      </div>
    </div>
   
  );
}

export default App;
