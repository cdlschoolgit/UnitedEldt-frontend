import React, { useState } from 'react'
import pic1 from '../images/cdlparking1.png'
import pic2 from '../images/playbtn.png'
import { Link } from 'react-router-dom'
import { Translator, Translate } from "react-auto-translate";
function Cdlparking1() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
//  
const storedLanguage = localStorage.getItem('selectedLanguage');
const storedlang= JSON.parse(storedLanguage)
const [showIframe, setShowIframe] = useState(false);
const toggleIframe = () => {
    setShowIframe(!showIframe);
};
  return (
    <>
      <Translator
      from="en"
      to={storedlang?.lang2 ||"en"}
      googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
    >
            <div className='pretrippheader' style={{background:"#fff"}}>
                <h1 className='camelcase'><Translate>Parking Maneuvers</Translate></h1>

                <div>
                    <Link to="/cdlprep/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.8284 13.0001L13.1924 18.3641L11.7782 19.7783L4 12.0001L11.7782 4.222L13.1924 5.6362L7.8284 11.0001L20 11.0001V13.0001L7.8284 13.0001Z" fill="#0A0A0A" />
                    </svg>
                    </Link>
                   
                    <div ></div>
                    <span></span>
                </div>
            </div>
            <div style={{background:"#F6F6F9",paddingBottom:"10px"}}>

            
            <div className='pretripimg'>
                        {showIframe ? (
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/fAHSMqjNqhU?si=Vh-5TOdSX2l_aKId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        ) : (
                            <>
                                <div className="card text-bg-dark">
                                    <img src={pic1} alt="Image" width="100%" height="200" onClick={toggleIframe} />
                                    <div className="card-img-overlay">

                                        <div className='imgprebtn'>
                                            <img src={pic2} alt="Image" width="60" height="60" onClick={toggleIframe} />
                                        </div>





                                    </div>
                                </div>



                            </>


                        )}


                    </div>

            <div className='pretriplogo'>
                <div className='pretriplogoleft'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M1.66536 7.49997H4.16536V17.5H1.66536C1.20513 17.5 0.832031 17.1269 0.832031 16.6667V8.33331C0.832031 7.87307 1.20513 7.49997 1.66536 7.49997ZM6.07611 6.42257L11.4099 1.08884C11.5564 0.942216 11.7886 0.925724 11.9544 1.05013L12.6649 1.583C13.0689 1.88593 13.2509 2.40211 13.1263 2.89138L12.1652 6.66664H17.4987C18.4192 6.66664 19.1654 7.41283 19.1654 8.33331V10.0869C19.1654 10.3047 19.1227 10.5202 19.0399 10.7215L16.4612 16.9839C16.3326 17.2962 16.0283 17.5 15.6906 17.5H6.66536C6.20513 17.5 5.83203 17.1269 5.83203 16.6667V7.01182C5.83203 6.79081 5.91983 6.57885 6.07611 6.42257Z" fill="#FBB723" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.83217 13.3333H2.4987C1.57822 13.3333 0.832031 12.5872 0.832031 11.6667V9.91308C0.832031 9.69533 0.874681 9.47975 0.957565 9.2785L3.53621 3.01604C3.66478 2.70379 3.96909 2.5 4.30677 2.5H18.332C18.7923 2.5 19.1654 2.8731 19.1654 3.33333V11.6667C19.1654 12.1269 18.7923 12.5 18.332 12.5H15.4305C15.1597 12.5 14.9059 12.6316 14.7497 12.8528L10.2052 19.2908C10.0864 19.459 9.86261 19.5153 9.67845 19.4232L8.16672 18.6673C7.29035 18.2292 6.83776 17.2395 7.07948 16.29L7.83217 13.3333ZM14.1654 11.1771V4.16667H4.86486L2.4987 9.91308V11.6667H7.83217C8.91945 11.6667 9.71553 12.6908 9.44736 13.7445L8.69461 16.7012C8.64628 16.8911 8.73678 17.089 8.91211 17.1767L9.46303 17.4521L13.3881 11.8917C13.5964 11.5966 13.8625 11.3548 14.1654 11.1771ZM15.832 10.8333H17.4987V4.16667H15.832V10.8333Z" fill="#FBB723" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M18.3346 10.8333H16.668V6.0316L10.0611 11.9483L3.33464 6.01328V15.8333H11.668V17.5H2.5013C2.04107 17.5 1.66797 17.1269 1.66797 16.6667V3.33333C1.66797 2.8731 2.04107 2.5 2.5013 2.5H17.5013C17.9616 2.5 18.3346 2.8731 18.3346 3.33333V10.8333ZM3.76085 4.16667L10.0529 9.71833L16.2521 4.16667H3.76085ZM16.2513 18.125L14.0471 19.2838L14.4681 16.8294L12.6848 15.0912L15.1492 14.7331L16.2513 12.5L17.3534 14.7331L19.8178 15.0912L18.0346 16.8294L18.4555 19.2838L16.2513 18.125Z" fill="#FBB723" />
                        </svg>
                    </div>

                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.58464 0.833008L17.5013 5.41634V14.583L9.58464 19.1663L1.66797 14.583V5.41634L9.58464 0.833008ZM9.58464 2.75884L3.33464 6.37727V13.6221L9.58464 17.2405L15.8346 13.6221V6.37727L9.58464 2.75884ZM9.58464 13.333C7.74369 13.333 6.2513 11.8406 6.2513 9.99967C6.2513 8.15872 7.74369 6.66634 9.58464 6.66634C11.4256 6.66634 12.918 8.15872 12.918 9.99967C12.918 11.8406 11.4256 13.333 9.58464 13.333ZM9.58464 11.6663C10.5051 11.6663 11.2513 10.9202 11.2513 9.99967C11.2513 9.07917 10.5051 8.33301 9.58464 8.33301C8.66414 8.33301 7.91797 9.07917 7.91797 9.99967C7.91797 10.9202 8.66414 11.6663 9.58464 11.6663Z" fill="#FBB723" />
                    </svg>
                </div>
            </div>

            <div className='pretripquestions'>
                <div className='questionheading camelcase'>#<Translate>1Straight backing</Translate> </div>
               
                <p > <Translate>Straight backing is the foundation for all other backing maneuvers.
Make sure you can straight back before moving on to the other maneuvers. Pull forward ahead of the cones. Make sure the rear of the
trailer is past the front of the box.</Translate></p>
                <div className='tipsheading'>
                    <div> <Translate>Tips</Translate>:</div>
                    <ul>
                        <li>  <Translate>Straight backing is the foundation for all other backing maneuvers. Make sure you can straight back before moving on to the other maneuvers. Pull forward ahead of the cones. Make sure the rear of the trailer is past the front of the box.</Translate></li>
                       
                    </ul>

                </div>
                <div className='timeline'>
                    <div> <Translate>Timeline</Translate></div>
                    <ul>
                        <li className='camelcase'>
                            <Link to="/parking/Offset" onClick={scrollToTop}>
                            <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0013 18.3337C5.39893 18.3337 1.66797 14.6027 1.66797 10.0003C1.66797 5.39795 5.39893 1.66699 10.0013 1.66699C14.6036 1.66699 18.3346 5.39795 18.3346 10.0003C18.3346 14.6027 14.6036 18.3337 10.0013 18.3337ZM10.0013 16.667C13.6832 16.667 16.668 13.6822 16.668 10.0003C16.668 6.31843 13.6832 3.33366 10.0013 3.33366C6.3194 3.33366 3.33464 6.31843 3.33464 10.0003C3.33464 13.6822 6.3194 16.667 10.0013 16.667ZM8.85288 7.01248L12.9186 9.72299C13.0718 9.82508 13.1132 10.0321 13.0111 10.1852C12.9866 10.2218 12.9552 10.2532 12.9186 10.2777L8.85288 12.9882C8.69972 13.0903 8.49272 13.0489 8.39064 12.8957C8.35414 12.841 8.33464 12.7767 8.33464 12.7108V7.28983C8.33464 7.10573 8.48388 6.9565 8.66797 6.9565C8.7338 6.9565 8.79813 6.97598 8.85288 7.01248Z" fill="#FBB723" />
                        </svg></span>  #<Translate>2 - Offset Parking</Translate>
                            </Link>
                           
                        </li>
                     
                        <li className='camelcase'> 
                        <Link to='/parking/Parallel' onClick={scrollToTop}>
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0013 18.3337C5.39893 18.3337 1.66797 14.6027 1.66797 10.0003C1.66797 5.39795 5.39893 1.66699 10.0013 1.66699C14.6036 1.66699 18.3346 5.39795 18.3346 10.0003C18.3346 14.6027 14.6036 18.3337 10.0013 18.3337ZM10.0013 16.667C13.6832 16.667 16.668 13.6822 16.668 10.0003C16.668 6.31843 13.6832 3.33366 10.0013 3.33366C6.3194 3.33366 3.33464 6.31843 3.33464 10.0003C3.33464 13.6822 6.3194 16.667 10.0013 16.667ZM8.85288 7.01248L12.9186 9.72299C13.0718 9.82508 13.1132 10.0321 13.0111 10.1852C12.9866 10.2218 12.9552 10.2532 12.9186 10.2777L8.85288 12.9882C8.69972 13.0903 8.49272 13.0489 8.39064 12.8957C8.35414 12.841 8.33464 12.7767 8.33464 12.7108V7.28983C8.33464 7.10573 8.48388 6.9565 8.66797 6.9565C8.7338 6.9565 8.79813 6.97598 8.85288 7.01248Z" fill="#FBB723" />
                        </svg></span># <Translate>3 - Parallel Parking</Translate> 
                        </Link>
                   
                        </li>
                        <li className='camelcase'>
                            <Link to='/parking/Alleydock' onClick={scrollToTop}>
                            <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0013 18.3337C5.39893 18.3337 1.66797 14.6027 1.66797 10.0003C1.66797 5.39795 5.39893 1.66699 10.0013 1.66699C14.6036 1.66699 18.3346 5.39795 18.3346 10.0003C18.3346 14.6027 14.6036 18.3337 10.0013 18.3337ZM10.0013 16.667C13.6832 16.667 16.668 13.6822 16.668 10.0003C16.668 6.31843 13.6832 3.33366 10.0013 3.33366C6.3194 3.33366 3.33464 6.31843 3.33464 10.0003C3.33464 13.6822 6.3194 16.667 10.0013 16.667ZM8.85288 7.01248L12.9186 9.72299C13.0718 9.82508 13.1132 10.0321 13.0111 10.1852C12.9866 10.2218 12.9552 10.2532 12.9186 10.2777L8.85288 12.9882C8.69972 13.0903 8.49272 13.0489 8.39064 12.8957C8.35414 12.841 8.33464 12.7767 8.33464 12.7108V7.28983C8.33464 7.10573 8.48388 6.9565 8.66797 6.9565C8.7338 6.9565 8.79813 6.97598 8.85288 7.01248Z" fill="#FBB723" />
                        </svg></span> #<Translate>4 - Alley Dock</Translate>
                            </Link>
                            
                        </li>
                     

                    </ul>

                </div>
            </div>
            </div>
           
            </Translator>
        </>
  )
}

export default Cdlparking1