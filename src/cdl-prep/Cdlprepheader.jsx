import React, { useEffect, useState } from 'react'
import pic1 from "./images/headerlogo1.png"
import pic2 from "./images/headerlogo2.png"
import pic3 from "./images/headerlogo3.png"
import pic4 from "./images/headerlogo4.png"
import { Translator, Translate } from "react-auto-translate";
import searchlogo from "./searchlogo.svg"
import { Link } from 'react-router-dom'
function Cdlprepheader({handleInputChange,filteredarraay}) {
    const [inputValue, setInputValue] = useState('');
const handelinput=(e)=>{
const valueofinput=e.target.value;
setInputValue(valueofinput)
handleInputChange(valueofinput)

}

// const engdataheader=[{
//     heading:"Welcome!",
//     title:'CDL TRAINING TEST',
//     placehold:"search"

// }]
// const portagesdataheader=[{
//     heading:"Welcome2!",
//     title:'CDL TRAINING TEST',
//     placehold:"search"

// }]



const storedLanguage = localStorage.getItem('selectedLanguage');
const storedlang= JSON.parse(storedLanguage)

    return (
        <>
     <Translator
      from="en"
      to={storedlang?.lang2 ||"en"}

      googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
    >
       
            
              <div className='header-wraper' style={{ marginTop: "30px" }}>
                <h1 className='cdlheaderheading'><Translate>Welcome!</Translate></h1>
                <p className='cdlheaderpera'><Translate>CDL TRAINING TEST</Translate></p>

                <div class="search_Box2">
                    <div class="d-flex gap-3 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M7.94483 14.8922C10.9606 14.8922 13.4053 12.1758 13.4053 8.82498C13.4053 5.47418 10.9606 2.75781 7.94483 2.75781C4.9291 2.75781 2.48438 5.47418 2.48438 8.82498C2.48438 12.1758 4.9291 14.8922 7.94483 14.8922Z" stroke="url(#paint0_linear_4621_17712)" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.8086 13.1182L15.0019 16.6663" stroke="url(#paint1_linear_4621_17712)" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_4621_17712" x1="-1.43259" y1="-1.54988" x2="26.5844" y2="14.6784" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3550DC" />
                                    <stop offset="1" stop-color="#27E9F7" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_4621_17712" x1="10.6633" y1="11.8586" x2="18.8556" y2="16.6038" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3550DC" />
                                    <stop offset="1" stop-color="#27E9F7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <input type="text" placeholder="Search" value={inputValue} onChange={(e)=>{handelinput(e)}} /></div>
                        <img src={searchlogo} alt="" />
                </div>
            </div>
            
            <div className='logolink'>
                <div >
                    <Link
                     to="/Pretrip/questionA">
                    <p><Translate>Pre-Trip</Translate>  
                        <img src={pic1} alt="" height="25" width="25" />
                    </p>
                    </Link>

                </div>
                <div>
                    <Link to='/parking/straight'>
                    <p> <Translate>Parking</Translate>  <img src={pic2} alt="" height="25" width="25"/></p></Link>
                </div>
                <div>   
                <Link to='/parking/road'>
                <p> <Translate>Road</Translate> <img src={pic3} alt="" height="25" width="25"/></p>
                </Link>
                       </div>

                <div>
                    <Link to="/cdlprep/states">
                    <p><Translate>States</Translate> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g clip-path="url(#clip0_4626_18777)">
    <path d="M18.9571 14.0277L17.9528 12.4435L18.5485 10.6655C18.6292 10.4228 18.5287 10.1564 18.3072 10.0294L16.6819 9.09248L16.3831 7.24111C16.3414 6.98853 16.1285 6.80009 15.8733 6.78951L13.9988 6.71612L12.874 5.21518C12.7206 5.01021 12.4429 4.94211 12.2135 5.05253L10.5202 5.85787L8.82616 5.05187C8.59606 4.94277 8.31967 5.01087 8.16561 5.21518L7.04091 6.71612L5.1664 6.78951C4.91183 6.79943 4.69826 6.98787 4.65727 7.24045L4.3584 9.09182L2.73317 10.0287C2.51166 10.1557 2.4105 10.4222 2.49117 10.6648L3.08691 12.4428L2.0832 14.0277C1.94633 14.2439 1.98138 14.5263 2.16585 14.7035L3.51934 16.0014L3.36726 17.87C3.34676 18.1258 3.5081 18.3592 3.7534 18.4307L5.55518 18.9497L6.28846 20.6761C6.38896 20.9108 6.64088 21.047 6.89081 20.9928L8.72896 20.6159L10.1796 21.8041C10.2782 21.8841 10.3992 21.9258 10.5202 21.9258C10.6412 21.9258 10.7615 21.8841 10.8607 21.8041L12.3114 20.6159L14.1495 20.9928C14.3988 21.0457 14.652 20.9115 14.7519 20.6761L15.4851 18.9497L17.2869 18.4307C17.5322 18.3599 17.6936 18.1258 17.6731 17.87L17.521 16.0014L18.8745 14.7035C19.0589 14.5263 19.094 14.2439 18.9571 14.0277ZM14.4061 11.4417L10.6431 17.0792C10.501 17.2894 10.2808 17.4303 10.0619 17.4303C9.84375 17.4303 9.59977 17.3079 9.44438 17.1519L6.68187 14.3451C6.49343 14.1533 6.49343 13.8426 6.68187 13.6508L7.36357 12.9566C7.55202 12.7675 7.85815 12.7675 8.04528 12.9566L9.84309 14.7828L12.8079 10.3408C12.9567 10.1167 13.2589 10.0598 13.4784 10.2112L14.2778 10.7607C14.498 10.9128 14.5548 11.2189 14.4061 11.4417Z" fill="#030104"/>
  </g>
  <defs>
    <clipPath id="clip0_4626_18777">
      <rect width="22" height="22" fill="white"/>
    </clipPath>
  </defs>
</svg></p>
                    </Link></div>
            </div>
            
            
         
       
           
           

           




           </Translator>

        </>
    )
}

export default Cdlprepheader