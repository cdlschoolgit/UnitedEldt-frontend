import React from 'react'
import Cdlprepnav from '../Cdlprepnav'
import Cdlprepheader from '../Cdlprepheader'
import { Link } from 'react-router-dom'
import { Translator, Translate } from "react-auto-translate";
import FlagesSection from '../States/FlagesSection';
import App from './App';
function CdlprepStates() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const storedlang= JSON.parse(storedLanguage)
      return (
        <>
          <Translator
          from="en"
          to={storedlang?.lang2 ||"en"}
          googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
        >

            <Cdlprepnav customclass="cdlnav"/>
            <Cdlprepheader />
            <div className='stateswraper'>
                <h2 className='text-capitalize'> 
                   <Translate>States that accept</Translate>  <br /><Translate>taking the</Translate> <span style={{ color: "#FBB723" }}><Translate>Permit test </Translate><br /></span>  <Translate>in other </Translate><span style={{ color: "#FBB723" }}><Translate>languages</Translate></span>
                </h2>
                <p><Translate>Click on the state you want to know more</Translate> <br /><Translate>about the languages available to take your</Translate>  <br /><Translate>Learner's Permit test.</Translate> </p>

            </div>
<div className='statebottomline'></div>
<p className='statespera'>
<Translate>Click on the lipstick below</Translate> <span ><Translate>to learn all the steps to obtain</Translate> <br /> <Translate>your</Translate></span> <Translate>Commercial Driver's License (CDL).</Translate>
</p>
<div className='mobileabout'>
<FlagesSection/>

</div>
<div className='desktopabout'>
  <App/>
</div>
<Link to="/cdlprep/steps">
<div className='statesbtn text-capitalize'>
<Translate>5 Steps to your CDL Success:</Translate>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.16797 9.1665V5.83317H10.8346V9.1665H14.168V10.8332H10.8346V14.1665H9.16797V10.8332H5.83464V9.1665H9.16797ZM10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6036 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6036 18.3332 10.0013 18.3332ZM10.0013 16.6665C13.6832 16.6665 16.668 13.6818 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6818 6.3194 16.6665 10.0013 16.6665Z" fill="#595C73"/>
</svg>
</div>
</Link>
           
</Translator>
        </>
    )
}

export default CdlprepStates