import React, { useState } from 'react'
import Cdlprepnav from '../Cdlprepnav'
import Cdlprepheader from '../Cdlprepheader'
import pic1 from "../images/headerlogo1.png"
import pic2 from "../images/headerlogo2.png"
import pic3 from "../images/headerlogo3.png"
import pic4 from "../images/headerlogo4.png"
import { Link } from 'react-router-dom'
import { Translator, Translate } from "react-auto-translate";
function CdlprepSteps() {
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [step5, setStep5] = useState(false)

    const handelclick = () => {
        setStep1(false)
        setStep2(true)
    }
    const handelclick2 = () => {
        setStep2(false)
        setStep3(true)
    }
    const handelclick3 = () => {
        setStep3(false)
        setStep4(true)
    }
    const handelclick4 = () => {
        setStep4(false)
        setStep5(true)
    }

    const handelclickback = () => {
        setStep2(false)
        setStep1(true)
    }
    const handelclickback2 = () => {
        setStep3(false)
        setStep2(true)
    }
    const handelclickback3 = () => {
        setStep4(false)
        setStep3(true)
    }
    const handelclickback4 = () => {
        setStep5(false)
        setStep4(true)
    }

    const storedLanguage = localStorage.getItem('selectedLanguage');
    const storedlang= JSON.parse(storedLanguage)
      return (
        <>
          <Translator
          from="en"
          to={storedlang?.lang2 ||"en"}
          googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
        >
        
            <div className='stepsheader'>
                <Link to='/cdlprep/states'>
                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.8284 13.0001L13.1924 18.3641L11.7782 19.7783L4 12.0001L11.7782 4.222L13.1924 5.6362L7.8284 11.0001L20 11.0001V13.0001L7.8284 13.0001Z" fill="#0A0A0A" />
                </svg>
                </Link>
               
                <div>

                    <h3 className='camelcase'><Translate>5 Steps to your CDL Success:</Translate></h3>
                </div>

                <div className='stepline'></div>
            </div>
            <Cdlprepnav customclass="cdlnav2" />
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
                <div>       <p> <Translate>Road</Translate> <img src={pic3} alt="" height="25" width="25"/></p></div>

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

            {
                step1 ? <div className="stepwraper1">
                    <h3 className='camelcase'><Translate>step1</Translate></h3>
                    <h4 className='camelcase'><Translate>DOT Medical Exam and Commercial Motor</Translate> <br /> <Translate>Vehicle Certification</Translate></h4>
                    <p>
                        <span className='camelcase'><Translate>About the Exam</Translate>  </span><br />

                        <span className='secondpera'><Translate>A Department of Transportation (DOT) physical examination must be conducted by a licensed "medical examiner" listed on the Federal Motor Carrier Safety Administration (FMCSA) National Registry.</Translate></span>
                        <Translate>The term includes, but is not limited to, doctors of medicine (MD), doctors of osteopathy (DO), physician assistants (PA), advanced practice nurses (APN), and doctors of chiropractic (DC). </Translate><br />

                        <Translate>Follow this link to find a medical examiner who is certified by the FMCSA to perform DOT physical exams: https://nationalregistry.fmcsa.dot.gov/home</Translate> <br />
                        <br />
                        <Translate>A DOT physical exam is valid for up to 24 months. The medical examiner may also issue a medical examiner's certificate for less than 24 months when it is desirable to monitor a condition, such as high blood pressure.</Translate> 
                    </p>
                    <div className='text-center my-5'>
                        <button className='btn btn-warning mx-auto camelcase' onClick={handelclick} >step 2 </button>
                    </div>

                </div> : null
            }
            {
                step2 ? <div className="stepwraper1">
                    <h3 className='camelcase'><Translate>step2</Translate></h3>
                    <h4 className='camelcase'><Translate>CDL Permit Test</Translate></h4>
                    <p className='step2pera'>


                    <Translate>With our Free CDL Permit Training courses, getting a commercial driver's permit has never been easier. Our methods are proven to help you pass the CDL Written Test so you can start your new career as a CDL driver.</Translate>
                    </p>
                    • <span style={{ fontWeight: "800" }}><Translate>Free Training</Translate></span> <Translate>videos on every topic</Translate> <br />
                    •<Translate>CDL study guides to help you learn the material</Translate> <br />
                    • <span style={{ fontWeight: "800" }}><Translate>Quizzes</Translate></span> <Translate>to test your knowledge </Translate><br />
                    •<Translate>CDL Practice test for</Translate>  <span style={{ fontWeight: "800" }}><Translate>every step</Translate></span> <br />
                    •<Translate>Free Course Tracking to help you keep track of your progress</Translate>


                    <div className='text-center my-5'>
                        <button className='btn btn-warning mx-auto me-2' onClick={handelclickback} ><Translate>Back</Translate></button>
                        <button className='btn btn-warning mx-auto camelcase' onClick={handelclick2} ><Translate>step 3</Translate></button>

                    </div>

                </div> : null
            }
            {
                step3 ? <div className="stepwraper1">
                    <h3 className='camelcase'><Translate>step3</Translate></h3>
                    <h4 className='camelcase'><Translate>CDL School</Translate></h4>
                    <p className='step2pera'>


                    <Translate>After you get your CDL Permit, you are ready for CDL School. In the USA, there is now an Entry-Level Driver Training(ELDT) Mandate. The ELDT regulations set the minimum Federal requirements for training that entry-level drivers must complete before being permitted to take certain CDL skills or knowledge tests.</Translate>
                        <br /> <br />

                        <Translate>There are two main sections of training you will need to complete, Theory and Behind-the-Wheel training. We can provide the Online Theory training here on this website. You will need to go to a local CDL Training school to complete the behind-the-wheel training though.
                        What we Offer:</Translate>






                    </p>
                    • <span style={{ fontWeight: "800" }}><Translate>Convenience</Translate>:</span>  <Translate>Study at your own pace, on your own time, and from anywhere in the world.</Translate><br />
                    • <span style={{ fontWeight: "800" }}><Translate>Affordability</Translate>:</span>  <Translate>Our program is much more affordable than traditional CDL training programs.</Translate><br />
                    • <span style={{ fontWeight: "800" }}><Translate>Quality</Translate>:</span>   <Translate>Our courses were built by experienced and qualified instructors.</Translate><br />
                    • <span style={{ fontWeight: "800" }}> <Translate>Guarantee</Translate>:</span>   <Translate>We're so confident that you'll be satisfied with our program that we offer a satisfaction guarantee.</Translate><br />
                    • <span style={{ fontWeight: "800" }}> <Translate>Course Tracking</Translate>:</span>    <Translate>Keep track of your progress</Translate><br />



                    <div className='text-center my-5'>
                        <button className='btn btn-warning mx-auto me-2' onClick={handelclickback2} ><Translate>Back</Translate></button>
                        <button className='btn btn-warning mx-auto camelcase' onClick={handelclick3}><Translate>step 4</Translate></button>

                    </div>

                </div> : null
            }
             {
                step4 ? <div className="stepwraper1">
                    <h3 className='camelcase'><Translate>step4</Translate></h3>
                    <h4 className='camelcase'><Translate>CDL Skills/Driving Test</Translate></h4>
                    <p className='step2pera'>


                    <Translate>Once you have passed your theory and behind-the-wheel training at an ELDT certified school, you are ready for the CDL Skills Driving Test. This is the last step in getting your CDL License. We also cover this test in our Free CDL Permit Training Course.</Translate>


                    </p>
                 



                    <div className='text-center my-5'>
                        <button className='btn btn-warning mx-auto me-2' onClick={handelclickback3} ><Translate>Back</Translate></button>
                        <button className='btn btn-warning mx-auto camelcase' onClick={handelclick4} ><Translate>step 5</Translate></button>

                    </div>

                </div> : null
            }
            {
                step5 ? <div className="stepwraper1">
                    <h3 className='camelcase'><Translate>step5</Translate></h3>
                    <h4 className='camelcase'><Translate>Get Hired</Translate></h4>
                    <p className='step2pera'>

                    <Translate>Once you have your CDL License, it's time to get hired on as a driver. We recommend our partner site garysjobboard.com. They have a ton of entry-level CDL Jobs and their site is easy to use. Good luck on your new CDL Driving Career.</Translate>
                    


                    </p>
                 



                    <div className='text-center my-5'>
                        <button className='btn btn-warning mx-auto me-2' onClick={handelclickback4} ><Translate>Back</Translate></button>
                       

                    </div>

                </div> : null
            }
</Translator>
        </>
    )
}

export default CdlprepSteps