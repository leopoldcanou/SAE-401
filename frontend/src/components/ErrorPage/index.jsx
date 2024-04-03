import { useRouteError } from "react-router-dom";
import img2 from "./459.gif";
import img3 from "./4x.png";
import { useEffect, useState } from "react";




export default function ErrorPage() {

  function handleClick() {
    console.log('Button clicked');
    //delete geekdiv content and add 4x.png

    const geekdiv = document.getElementById('geekdiv');
    geekdiv.innerHTML = '';
    const img = document.createElement('img');
    img.src = img3;
    img.alt = "Error GIF";
    img.className = "w-52";
    //center img and vertical and scale 150%
    img.className = "content-center align-middle transform scale-150";
    geekdiv.appendChild(img);
    const button = document.getElementById('emojibutton');
    button.style.display = 'none';


  }




  const [value, setValue] = useState(0);


  // random number between 1 and 100 errors changing every second
  useEffect(() => {
    const interval = setInterval(() => {
      const value = Math.floor(Math.random() * 100) + 1;
      setValue(value);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="geekdiv" className="flex flex-col items-center my-20 space-y-5">

      <p><span className="text-3xl font-bold">AcTuAllY</span> there are <span className="font-bold text-red-600">{value}</span> errors</p>

      {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}

      {/* <img src={img} alt="Error GIF" className="w-52" /> */}
      <img src={img2} alt="Error GIF" className="w-52" />
      <button onClick={handleClick} id="emojibutton" className="px-6 py-2 text-white bg-blue-400 rounded-lg">Fix Errors</button>
    </div>
  );
}
