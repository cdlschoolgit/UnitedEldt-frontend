import React from 'react'
import logo from "./logo 1.svg"
import pic from "./images/rateuspic.png"
import pic1 from "./images/policyicon.png"
import { Translator,Translate } from 'react-auto-translate/lib/commonjs'
function Cdlprepnav({customclass}) {
  const storedLanguage = localStorage.getItem('selectedLanguage');
const storedlang= JSON.parse(storedLanguage)
  return (
  <>
  <Translator
      from="en"
      to={storedlang?.lang2 ||"en"}

      googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
    >
   <div className={` ${customclass} bg-white py-3 px-3`}  >
        <div><img src={logo} alt="" /></div>
        <div>
          
        <svg className='dropdown-toggle'  data-bs-toggle="dropdown"
    aria-expanded="false" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M3.125 8H16.875" stroke="#2D2727" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.125 4H16.875" stroke="#2D2727" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.125 12H16.875" stroke="#2D2727" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        <img src={pic} alt="" width="30px" height="30px" />
     <Translate>Rate US</Translate> 
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
      <img src={pic1} alt="" width="20px" height="20px" /> 
      &nbsp;<Translate>Privicy police</Translate> 
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        
      <button className='cancelbtn mx-auto'><Translate>Cancel</Translate></button>
      </a>
    </li>
  </ul>
        </div>
      </div>
      </Translator>
  </>
  )
}

export default Cdlprepnav