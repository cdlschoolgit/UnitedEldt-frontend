import React, { useEffect, useRef, useState } from "react";
import { Translator, Translate } from "react-auto-translate";
import { useSelector } from "react-redux";
import aboutvid from "./images/aboutus.png"
import { Modal } from "antd";
import allcomp from "../../pages/Images/AllCampanies.svg"
import SliderSponsor from "../../pages/Allsponsors.svg"
import Aboutmobile from "./images/mobileabout.png"
import aboutimagegraenty from "./images/Garenty.png"
import statisfy from "./images/Statisfactory.png"
export default function HomeAboutUs({ language }) {
  const languageState = useSelector((state) => state.language);
  
  const handleClick = () => {
    console.log("pushed");
    window.scrollTo({
      top: 1000, // Scroll to the position 1000 pixels from the top
      behavior: "smooth",
    });
  };
  const [openvideo,setOpenvideo]=useState(false)

  const [openmobile,setOpenmobile]=useState(false)
  const videoRef = useRef(null);
  const handlemobile = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Call the parent component's close modal function
    setOpenmobile(false);
  };
  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Call the parent component's close modal function
    setOpenvideo(false);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Translator
        from="en"
        to={languageState?.language?.value || "en"}
        googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
      >
        {
          windowWidth <= 500?(<>
                      <div className="sliderforcomapny">
                      <div className="coverofsponer4">
                    <div className="courseltitle" style={{ display: "flex", justifyContent: "center" }}>
                        Partner Companies
                    </div>
                    <div className="descofpartner">
                        <div className="inercon">
                            Students who graduated with us are now working in these companies.

                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img className="sponsorimage" src={SliderSponsor} alt="Sponsor" />

                    </div>

                </div>
                      </div>
</>):( <div className="coverofhome_company" >
            <div className="containerofclassa mt-5">
        <div className="Graudatestudentjobs">
        <div className="courseltitle titleformobile"style={{display:"flex",justifyContent:"center",width:"100%",fontSize:"40px",fontWeight:"700"}} >
        The best companies are with us
                    </div>
                    <div className="describethestudent" style={{fontSize:"21px"}}>
                    Students who graduated with us are now working in these companies.
                    </div>
                    <img className="sponsodeimage" src={allcomp} alt="all_companies"/>
                    </div>
        </div>
        </div>)
        }
       
         
        <div className="about-area">
          <div className="container ">
            <div className="about-area-block">
              <div className="about-content">
              <div className="about-image mobile mobileer" >
                <img src={aboutimagegraenty} className="grentyimage" style={{width:"60px",height:"60px"}} alt="image grenty"></img>
                  <img src={Aboutmobile} alt="image"  onClick={()=>{setOpenmobile(true)}}/>
                  <div className="animation-container" style={{cursor:"pointer"}} onClick={()=>{setOpenmobile(true)}}>
          <svg className="svg1" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
            <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg className="svg2" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
            <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" stroke-width="2.4" stroke-miterlimit="10" />
            <path d="M37.7468 73.8002C58.0709 73.8002 74.5468 57.3243 74.5468 37.0002C74.5468 16.6761 58.0709 0.200195 37.7468 0.200195C17.4227 0.200195 0.946777 16.6761 0.946777 37.0002C0.946777 57.3243 17.4227 73.8002 37.7468 73.8002Z" fill="#FBB723" fill-opacity="0.5" />
            <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="learntext">Learn More</span>
        </div>
                </div>
                <div className="about_formobileview">

               
                <span className="sub-title  " >
                  <div className="desktopabout">
                                      <Translate>Online Learning </Translate>

                  </div>
                </span>
                <span className="sub-title " >
                  <div className="mobileabout">
                                      <Translate>Do your course your way</Translate>
                  </div>
                </span>

                <h2 className="title mobileabout">
                  <Translate>

                  Welcome to United ELDT you gateway to professional driving careers                  </Translate>
                </h2>
                <h2 className="title desktopabout">
                  <Translate>

                    Welcome to United ELDT - your gateway to professional driving careers
                  </Translate>
                </h2>
                <p className="sub">
                  <span className="mobileabout">
                    <Translate>
                    At United ELDT, we understand that becoming a skilled and confident driver is the first step towards a successful career on the road. As a leading provider of Entry Level Driving Training (ELDT) courses online, we are committed to helping aspiring drivers like you achieve their goals and unlock a world of opportunities. We offer courses in eight languages: Spanish, Portuguese, English, French, Russian, Arabic, Hindi, and Urdu.             </Translate>
                  </span>
                  <span className="desktopabout textofdesk">
                    <Translate>
                    At United ELDT, we understand that becoming a skilled and confident driver is the first step towards a successful career on the road. As a leading provider of Entry Level Driving Training (ELDT) courses online, we are committed to helping aspiring drivers like you achieve their goals and unlock a world of opportunities. We offer courses in eight languages: Spanish, Portuguese, English, French, Russian, Arabic, Hindi, and Urdu.        </Translate>
                  </span>

                  <div className="tw-flex lg:tw-justify-start tw-justify-center vousebtn">
                    <button className="default-btn lg:tw-w-1/2  buttonofcourse" onClick={handleClick}>
                      View Courses
                    </button>
                  </div>
                </p>
                
                </div>
               
              </div>

              <div className="about-image desktop">
              <div className="animation-container" style={{cursor:"pointer"}} onClick={()=>{setOpenvideo(true)}}>
          <svg className="svg1" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
            <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg className="svg2" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
            <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" stroke-width="2.4" stroke-miterlimit="10" />
            <path d="M37.7468 73.8002C58.0709 73.8002 74.5468 57.3243 74.5468 37.0002C74.5468 16.6761 58.0709 0.200195 37.7468 0.200195C17.4227 0.200195 0.946777 16.6761 0.946777 37.0002C0.946777 57.3243 17.4227 73.8002 37.7468 73.8002Z" fill="#FBB723" fill-opacity="0.5" />
            <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="learntext">Learn More</span>
        </div>
      <img style={{width:"100%",height:"100%"}} src={aboutvid} alt="video thumbnail" onClick={()=>{setOpenvideo(true)}}/>
      <img src={statisfy} className="statisfyimage" alt="staisfy"></img>

    </div>


            </div>
            {/* <div className="about-bottom">
              <AboutFeaturesList language={language} />
            </div> */}
          </div>
        </div>
        <Modal
  open={openvideo}
  onCancel={handleCloseModal}
  footer={null}
  width={1200}
  style={{ padding: 0, borderRadius: 0, background: "black" }} // Removed padding and border radius
  closeIcon={false}
  bodyStyle={{ padding: 0, background: "black", marginTop: 0, position: 'relative' }} // Added position relative to the modal body
>
  <video controls width="1200px" height="auto" autoPlay ref={videoRef}>
    {/* Adjusted video size */}
    <source src="https://united-cdl-school.s3.amazonaws.com/Videos+of/English.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Adding the X mark icon */}
  <div onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '89%', color: 'black',fontSize:"40px",cursor:"pointer" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.78362 22.3881C3.34062 20.6909 1.12427 18.0097 0.289146 14.2887C-0.910049 8.94303 1.70118 3.60744 6.63239 1.19766C8.75856 0.158349 11.0164 -0.23537 13.3537 0.138244C18.2267 0.917306 21.5279 3.66831 23.0139 8.34771C24.7687 13.8726 22.1821 19.6935 16.9782 22.2831C14.8526 23.3409 12.5959 23.6905 10.2356 23.3872C9.0375 23.2336 7.89655 22.8975 6.78362 22.3881Z" fill="#C4C4C3"/>
<path d="M9.17974 15.8939C8.90192 16.1704 8.64035 16.4385 8.37094 16.6976C7.90997 17.1404 7.28601 17.1215 6.82896 16.6563C6.37863 16.1978 6.36239 15.5834 6.80599 15.1378C7.87972 14.0594 8.95738 12.9849 10.0417 11.9165C10.1762 11.7842 10.1812 11.7205 10.0434 11.5848C8.97698 10.5349 7.92285 9.47269 6.85921 8.42054C6.54274 8.1078 6.39039 7.74703 6.5265 7.31589C6.66989 6.86242 6.98579 6.56978 7.46356 6.47987C7.8422 6.40839 8.13962 6.56978 8.39951 6.82947C9.45811 7.88721 10.5223 8.93936 11.5736 10.0038C11.731 10.163 11.805 10.1624 11.9618 10.0032C13.007 8.94438 14.0667 7.90005 15.1175 6.84622C15.4322 6.53069 15.7952 6.38716 16.227 6.52734C16.6712 6.67142 16.958 6.9797 17.051 7.44546C17.1288 7.83471 16.9613 8.13572 16.6947 8.401C15.6524 9.43863 14.6111 10.4779 13.5699 11.5161C13.3346 11.7507 13.3346 11.7507 13.5693 11.9847C14.605 13.0173 15.6384 14.0516 16.6779 15.0803C17.0017 15.4003 17.1501 15.7655 17.0006 16.2072C16.8471 16.6618 16.5239 16.9439 16.0467 17.0232C15.6798 17.084 15.3874 16.9215 15.1348 16.6691C14.0818 15.6175 13.0227 14.5726 11.9792 13.5126C11.8027 13.3334 11.7215 13.3457 11.5535 13.5171C10.7755 14.314 9.98126 15.0948 9.17974 15.8939Z" fill="#FDFDFC"/>
</svg></div>
</Modal>
      <Modal
        open={openmobile}
        onCancel={handlemobile}
        footer={null}
        width="90vw"
        style={{ padding: 0, borderRadius: 0, background: "black" }} // Removed padding and border radius
        closeIcon={false}
        bodyStyle={{ padding: 0, background: "black" ,marginTop: 0 }} // Removed padding for the modal body
      >
        <video controls width="100%"  height="auto" autoPlay ref={videoRef}>
          {/* Adjusted video size */}
          <source src="https://united-cdl-school.s3.amazonaws.com/Videos+of/English.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div onClick={handlemobile} style={{ position: 'absolute', top: '-15px', right: '89%', color: 'black',fontSize:"40px",cursor:"pointer" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.78362 22.3881C3.34062 20.6909 1.12427 18.0097 0.289146 14.2887C-0.910049 8.94303 1.70118 3.60744 6.63239 1.19766C8.75856 0.158349 11.0164 -0.23537 13.3537 0.138244C18.2267 0.917306 21.5279 3.66831 23.0139 8.34771C24.7687 13.8726 22.1821 19.6935 16.9782 22.2831C14.8526 23.3409 12.5959 23.6905 10.2356 23.3872C9.0375 23.2336 7.89655 22.8975 6.78362 22.3881Z" fill="#C4C4C3"/>
<path d="M9.17974 15.8939C8.90192 16.1704 8.64035 16.4385 8.37094 16.6976C7.90997 17.1404 7.28601 17.1215 6.82896 16.6563C6.37863 16.1978 6.36239 15.5834 6.80599 15.1378C7.87972 14.0594 8.95738 12.9849 10.0417 11.9165C10.1762 11.7842 10.1812 11.7205 10.0434 11.5848C8.97698 10.5349 7.92285 9.47269 6.85921 8.42054C6.54274 8.1078 6.39039 7.74703 6.5265 7.31589C6.66989 6.86242 6.98579 6.56978 7.46356 6.47987C7.8422 6.40839 8.13962 6.56978 8.39951 6.82947C9.45811 7.88721 10.5223 8.93936 11.5736 10.0038C11.731 10.163 11.805 10.1624 11.9618 10.0032C13.007 8.94438 14.0667 7.90005 15.1175 6.84622C15.4322 6.53069 15.7952 6.38716 16.227 6.52734C16.6712 6.67142 16.958 6.9797 17.051 7.44546C17.1288 7.83471 16.9613 8.13572 16.6947 8.401C15.6524 9.43863 14.6111 10.4779 13.5699 11.5161C13.3346 11.7507 13.3346 11.7507 13.5693 11.9847C14.605 13.0173 15.6384 14.0516 16.6779 15.0803C17.0017 15.4003 17.1501 15.7655 17.0006 16.2072C16.8471 16.6618 16.5239 16.9439 16.0467 17.0232C15.6798 17.084 15.3874 16.9215 15.1348 16.6691C14.0818 15.6175 13.0227 14.5726 11.9792 13.5126C11.8027 13.3334 11.7215 13.3457 11.5535 13.5171C10.7755 14.314 9.98126 15.0948 9.17974 15.8939Z" fill="#FDFDFC"/>
</svg></div>
      </Modal> 
      </Translator>

    </>
  );
}
