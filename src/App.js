import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { useState } from 'react';


/*const Blob = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  window.onpointermove = event => { 
    const blob = document.getElementById("blob");
    const { clientX, clientY } = event;
    setMousePosition ({x : clientX, y : clientY});

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });
  }

  return (
    <div id="blob"/>
  );
};

*/

function App() {
  return (
  
    <div className="sm:flex sm:justify-between w-screen h-screen overflow-y-auto overflow-x-hidden selection:bg-[#64ffda] selection:text-teal-900 bg-slate-900">

      <div className="sm:w-1/2 sm:h-full sm:overflow-hidden">
          <Header />
      </div>
     

      <div className="sm:w-1/2 sm:h-full sm:flex sm:justify-center sm:items-center sm:overflow-auto">
        <Main />
      </div>
      
    </div>    
  );
}

export default App;
